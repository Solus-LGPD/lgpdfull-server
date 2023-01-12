import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import * as bcrypt from 'bcrypt';
import { SaveDto } from './dtos/save-pass-user.dto';
import { UpdatePassDto } from './dtos/update-pass.dto';
import * as generator from 'generate-password';
import * as nodemailer from 'nodemailer';
import { sendSavePasswordEmailTemplate } from 'src/helpers/SendSavePasswordTemplate';
import { sendPasswordEmailTemplate } from 'src/helpers/SendPasswordTemplate';


@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  public async create(createUserDto: CreateUserDto)  {
    if(await this.findByEmail(createUserDto.email)){
      throw new BadRequestException({msg: "E-mail Already Registered"})
    }

    const password = generator.generate({
      length: 8,
      numbers: true,
      symbols: true,
      strict: true
    });
    
    const data = {
      ...createUserDto,
      pass: await bcrypt.hash(password, 10)
    };

    const createdUser = await this.prisma.user.create({
      data: {
        first_name: data.firstName,
        last_name: data.lastName,
        company_name: data.companyName,
        email: data.email,
        pass: data.pass,
      }
    })

    createdUser.pass = undefined;

    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port:  465,
      secure: true,
      auth:{
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
      }
    })
    
    transport.sendMail({
      from: "Solus LGPD <solusit2022@gmail.com",
      to: createdUser.email,
      subject: 'Teste E-mail Para Lead ',
      html: sendPasswordEmailTemplate(data.pass, createdUser.email),
      text: 'Hello World TESTE TESTE TESTE'
    })
    .then((response) => {
      return {
        msg: "Password sended"
      }
    })
    .catch((err) => {
        console.log('Erro no envio');
    })

    return createdUser;
  }

  public async findAll() {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        first_name: true,
        company_name: true,
        is_admin: false
      }
    });

    return users;
  }

  public async updateUserData(updateUserDto: UpdateUserDto) {
    const data = {
      ...updateUserDto
    }
    
    await this.prisma.user.update({
      where: {id: data.id},
      data: {
        email: data.email || undefined,
        first_name: data.firstName || undefined,
        last_name: data.lastName || undefined,
        company_name: data.companyName || undefined
      }
    });

    return {
      msg: "E-mail updated"
    }
  }

  public async updatePassword(updatePassDto: UpdatePassDto) {
    const user = await this.prisma.user.findUnique({
      where: {id: updatePassDto.id}
    });
    const isPassValid = await bcrypt.compare(updatePassDto.pass, user.pass);
    if(!isPassValid){
      throw new BadRequestException({msg: "this account doesn't exist"});
    }

    await this.prisma.user.update({
      where: {id: updatePassDto.id},
      data: {
        pass: await bcrypt.hash(updatePassDto.newPass, 10)
      }
    });

    return {
      msg: "Password updated"
    }
  }

  public async remove(id: string) {
    await this.prisma.user.delete({
      where: {id}
    });

    return {
      msg: "User Deleted"
    }
  }

  public async savePass(saveDto: SaveDto) {
    const user = await this.findByEmail(saveDto.email);

    if(!user){
      throw new BadRequestException({msg: "this account doesn't exist"});
    }
    
    const newPassword = generator.generate({
      length: 8,
      numbers: true,
      symbols: true,
      strict: true
    });

    await this.prisma.user.update({
      where:{ email: user.email },
      data:{ pass: await bcrypt.hash(newPassword, 10) }
    });

    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port:  465,
      secure: true,
      auth:{
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
      }
    })
    
    transport.sendMail({
      from: "Solus LGPD <solusit2022@gmail.com",
      to: user.email,
      subject: 'Teste E-mail Para Lead ',
      html:sendSavePasswordEmailTemplate(newPassword),
      text: 'Hello World TESTE TESTE TESTE'
    })
    .then((response) => {
      return {
        msg: "Password sended"
      }
    })
    .catch((err) => {
        console.log('Erro no envio'); // Retirar para produção
        //throw new BadRequestException({msg: "E-mail sending failed"});
    })
  }

  public async findByEmail(email: string){
    const user = await this.prisma.user.findUnique({where: {email}})

    return user;
  }
}
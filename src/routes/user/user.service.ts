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

    const data = {
      ...createUserDto
    };

    const password = generator.generate({
      length: 8,
      numbers: true,
      symbols: false,
      strict: true
    });

    const createdUser = await this.prisma.user.create({
      data: {
        name: data.name,
        social_name: data.socialName,
        state: data.state,
        company_name: data.companyName,
        email: data.email,
        pass: await bcrypt.hash(password, 10),
      }
    })

    //createdUser.pass = undefined;
    
    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port:  465,
      secure: true,
      auth:{
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
      }
    })
    
    await transport.sendMail({
      from: "Solus LGPD <solusit2022@gmail.com",
      to: createdUser.email,
      subject: 'Senha de acesso ao sistema LGPDFull',
      html: sendPasswordEmailTemplate(password, createdUser.email),
      text: `Nova senha: ${password}`
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
        name: true,
        company_name: true,
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
        name: data.name || undefined,
        state: data.state || undefined,
        social_name: data.socialName || undefined,
        company_name: data.companyName || undefined
      }
    });

    return {
      msg: "Dados foram atualizados"
    }
  }

  public async updatePassword(updatePassDto: UpdatePassDto) {
    const user = await this.prisma.user.findUnique({
      where: {id: updatePassDto.id}
    });
    const isPassValid = await bcrypt.compare(updatePassDto.pass, user.pass);
    if(!isPassValid){
      throw new BadRequestException({msg: "A senha atual está incorreta."});
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
    await this.prisma.user.update({
      where: {
        id
      },
      data: {
        status: false
      }
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
      subject: 'Senha de acesso ao Sistema LGPDFull',
      html:sendSavePasswordEmailTemplate(newPassword),
      text: `Nova senha: ${newPassword}`
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
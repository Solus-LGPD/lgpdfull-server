import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import * as bcrypt from 'bcrypt';
import { response } from 'express';
import { SaveDto } from './dtos/save-pass-user.dto';
import { UpdatePassDto } from './dtos/update-pass.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  public async create(createUserDto: CreateUserDto)  {
    if(this.findByEmail(createUserDto.email)){
      throw new BadRequestException({msg: "E-mail Already Registered"})
    }
    
    const data = {
      ...createUserDto,
      pass: await bcrypt.hash(createUserDto.pass, 10)
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

    return {
      ...users
    }
  }

  public async updateEmail(updateUserDto: UpdateUserDto) {
    await this.prisma.user.update({
      where: {id: updateUserDto.id},
      data: {
        email: updateUserDto.email
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

  async savePass(saveDto: SaveDto) {
    if(!this.findByEmail(saveDto.email)){
      throw new BadRequestException({msg: "this account doesn't exist"})
    }
    
    //Envio de e-mail com a nova senha do usuário
  }

  public async findByEmail(email: string){
    const user = await this.prisma.user.findUnique({where: {email}})

    return user;
  }
}
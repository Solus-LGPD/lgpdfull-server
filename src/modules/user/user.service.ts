import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import * as bcrypt from 'bcrypt';
import { response } from 'express';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService

    ) { }

  public async create(createUserDto: CreateUserDto)  {
    if(!this.findByEmail(createUserDto.email)){
      throw new BadRequestException({msg: "User Already Exists"})
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
    return `This action returns all user`;
  }

  public async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} user`;
  }

  public async findByEmail(email: string){
    const user = await this.prisma.user.findUnique({where: {email}})

    return user;
  }
}
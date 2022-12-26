import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService

    ) { }

  public async create(createUserDto: CreateUserDto)  {
    const data = {
      ...createUserDto,
    };

    data.pass = await bcrypt.hash(data.pass, 10);

    const createdUser = await this.prisma.user.create({data})

    return data;
  }

  public async authUser(loginUserDto: LoginUserDto) {
    return `This action returns a user`;
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

  private async findByEmail(email: string){
    return 'return id'
  }
}

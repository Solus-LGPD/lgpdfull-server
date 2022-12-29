import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDpoDto } from './dtos/create-dpo.dto';
import { UpdateDpoDto } from './dtos/update-dpo.dto';

@Injectable()
export class DpoService {

  constructor(
    private readonly prisma:PrismaService
  ){ }

  public async create(createDpoDto: CreateDpoDto) {
    const data = {
      ...createDpoDto,
    };

    await this.updateActualDpo();

    const createdDpo = await this.prisma.dpo.create({
      data: {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        user_id: data.userId
      }
    });

    return createdDpo;
  }

  private async updateActualDpo() {
    await this.prisma.dpo.updateMany({
      where: {
        actual: true
      },
      data: {
        actual: false
      }
    })
  }

  public async findAll() {
    const dpos = await this.prisma.dpo.findMany({
      select: {
        id: true,
        first_name: true,
        user_id: true,
        email: true
      }
    });

    return dpos;
  }

  public async updateEmail(updateDpoDto: UpdateDpoDto) {
    await this.prisma.dpo.update({
      where: {
        id: updateDpoDto.id
      },
      data:{
        email: updateDpoDto.email
      }
    });

    return {
      msg: "Email Updated"
    }
  }
}

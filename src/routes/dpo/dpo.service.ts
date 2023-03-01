import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDpoDto } from './dtos/create-dpo.dto';
import { FindDpoDto } from './dtos/find-dpo.dto';
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

    await this.prisma.dpo.create({
      data: {
        name: data.name,
        social_name: data.socialName,
        natural_person: data.naturalPerson,
        email: data.email,
        user_id: data.userId
      }
    });

    return {
      msg: "DPO registrado"
    };
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

  public async findOne(findDpoDto: FindDpoDto){
    const dpo = await this.prisma.dpo.findFirst({
      where: {
        user_id: findDpoDto.userId, AND:{
          actual: true,
        }
      },
      select: {
        id: true,
        email: true,
        name: true,
        social_name: true
      }
    })

    return dpo
  }

  public async findAll(findDpoDto: FindDpoDto) {
    const dpos = await this.prisma.dpo.findMany({
      where: {
        user_id: findDpoDto.userId
      },
      select: {
        id: true,
        social_name: true,
        natural_person: true,
        actual: true
      }
    });

    return dpos;
  }

  public async updateData(updateDpoDto: UpdateDpoDto) {
    const data = {
      ...updateDpoDto
    }
    
    await this.prisma.dpo.update({
      where: {
        id: data.id
      },
      data:{
        name: data.name || undefined,
        social_name: data.socialName || undefined,
        email: data.email || undefined,
        user_id: data.userId || undefined
      }
    });

    return {
      msg: "Data Updated"
    }
  }
}

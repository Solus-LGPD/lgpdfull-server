import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSectorDto } from './dtos/create-sector.dto';
import { UpdateSectorDto } from './dtos/update-sector.dto';

@Injectable()
export class SectorService {
  constructor(
    private readonly prisma:PrismaService
  ){}


  public async create(createSectorDto: CreateSectorDto) {
    const data = {
      ...createSectorDto
    };

    await this.prisma.sector.create({
      data
    });

    return {
      msg:"Sector Created"
    };
  }

  public async findAll(updateSectorDto:UpdateSectorDto) {
    const data = {
      ...updateSectorDto
    };

    const sectors = await this.prisma.sector.findMany({
      where: {
        user_id: data.user_id
      }
    });

    return sectors
  }

  public async findOne(updateSectorDto:UpdateSectorDto) {
    const data = {
      ...updateSectorDto
    }

    const sector = await this.prisma.sector.findUnique({
      where: {
        id: data.id
      }
    })

    return sector;
  }

  public async update(updateSectorDto:UpdateSectorDto) {
    const data = {
      ...updateSectorDto
    };

    await this.prisma.sector.update({
      where: {
        id: data.id
      },
      data:{
        tag_name: data.tag_name
      }
    });

    return {
      msg: 'Atualizado'
    };
  }

  public async remove(updateSectorDto:UpdateSectorDto) {
    const data = {
      ...updateSectorDto
    }

    await this.prisma.sector.delete({
      where:{
        id: data.id
      }
    })

    return {
      msg: 'Removido'
    };
  }
}

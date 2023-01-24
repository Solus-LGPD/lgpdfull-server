import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMappingDto } from './dtos/create-mapping.dto';
import { FindMappingDto } from './dtos/find-mapping.dto';
import { UpdateMappingDto } from './dtos/update-mapping.dto';

@Injectable()
export class MappingService {
  constructor(
    private readonly prisma:PrismaService
  ){ }

  public async create(createMappingDto: CreateMappingDto) {
    const data = {
      ...createMappingDto,
    };

    const now = new Date()

    await this.prisma.dataMapping.create({
      data: {
        user_id: data.userId,
        dpo_id: data.dpoId,
        sectorId: data.sectorId,
        colleted_data: data.colletedData,
        controller: data.controller,
        deadline_data: data.deadlineData,
        how_storage: data.howStorage,
        justification: data.justification,
        reason_data: data.reasonData,
        security_data: data.securityData,
        sensitive_data: data.sensitiveData,
        source_data: data.sourceData,
        tag_name: data.tagName,
        under_age_data: data.underAgeData,
        updated_at: new Date(now.toLocaleString())
      }
    })

    return {
      msg: "Inventário registrado"
    };
  }

  public async findAll(findMappingDto: FindMappingDto) {
    const data = {
      ...findMappingDto
    }
    
    const maps = await this.prisma.dataMapping.findMany({
      where: {
        user_id: data.userId
      },
      select: {
        tag_name: true,
        created_at: true,
        updated_at: true
      }
    });

    return maps;
  }

  public async findOne(updateMappingDto: UpdateMappingDto) {
    const data =  {
      ...updateMappingDto
    }

    const map = await this.prisma.dataMapping.findUnique({
      where:{
        id: data.id
      }
    })

    return map;
  }

  public async update(updateMappingDto: UpdateMappingDto) {
    const data = {
      ...updateMappingDto
    };

    const now = new Date();

    await this.prisma.dataMapping.update({
      where:{
        id: data.id
      },
      data: {
        colleted_data: data.colletedData || undefined,
        controller: data.controller || undefined,
        deadline_data: data.deadlineData || undefined,
        how_storage: data.howStorage || undefined,
        justification: data.justification || undefined,
        reason_data: data.reasonData || undefined,
        security_data: data.securityData || undefined,
        sensitive_data: data.sensitiveData || undefined,
        source_data: data.sourceData || undefined,
        tag_name: data.tagName || undefined,
        under_age_data: data.underAgeData || undefined,
        updated_at: new Date(now.toLocaleString())
    }})
    
    return {
      msg: "Inventário atualizado"
    };
  }

  public async remove(updateMappingDto: UpdateMappingDto) {
    const data = {
      ...updateMappingDto
    };

    await this.prisma.dataMapping.delete({
      where:{
        id: data.id
      }
    })

    return {
      msg: "Inventário Removido"
    };
  }
}

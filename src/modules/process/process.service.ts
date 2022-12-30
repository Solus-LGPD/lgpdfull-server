import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProcessDto } from './dtos/create-process.dto';
import { UpdateProcessDto } from './dtos/update-process.dto';

@Injectable()
export class ProcessService {
  constructor(
    private readonly prisma:PrismaService
  ){}

  public async create(createProcessDto: CreateProcessDto) {
    const data = {
      ...createProcessDto
    }

    const date = new Date();

    const createdProcess = await this.prisma.process.create({
      data: {
        dpo_id: data.dpoId,
        controller: data.controller,
        data_flow: data.dataFlow,
        operator: data.operator,
        employee_sector: data.employeeSector,
        updated_at: new Date(date.getUTCDate())
      }
    })

    return createdProcess;
  }

  public async findAll() {
    const docs = await this.prisma.process.findMany({
      where:{
        
      }
    })

    return `This action returns all process`;
  }

  update(updateProcessDto: UpdateProcessDto) {
    return `This action updates a process`;
  }

  remove(id: number) {
    return `This action removes a #${id} process`;
  }
}

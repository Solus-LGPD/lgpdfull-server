import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProcessDto } from './dtos/create-process.dto';
import { FindProcessDto } from './dtos/find-process.dto';
import { HandleProcessDto } from './dtos/handle-process.dto';

@Injectable()
export class ProcessService {
  constructor(
    private readonly prisma:PrismaService
  ){}

  public async create(createProcessDto: CreateProcessDto) {
    const data = {
      ...createProcessDto
    }

    const now = new Date();

    const createdProcess = await this.prisma.process.create({
      data: {
        user_id: data.userId,
        dpo_id: data.dpoId,
        controller: data.controller,
        data_flow: data.dataFlow,
        operator: data.operator,
        employee_sector: data.employeeSector,
        updated_at: new Date(now.toLocaleString())
      }
    })

    return createdProcess;
  }

  public async findAll(findProcessDto: FindProcessDto) {
    const docs = this.prisma.process.findMany({
      where: {
        user_id: findProcessDto.userId
      }
    });

    return docs;
  }

  public async update(updateProcessDto: HandleProcessDto) {
    const data = {
      ...updateProcessDto
    }

    const now = new Date();

    await this.prisma.process.update({
      where: {
        id: data.id
      },
      data: {
        updated_at: new Date(now.toLocaleString()),
        controller: data.controller || undefined,
        data_flow: data.dataFlow || undefined,
        employee_sector: data.employeeSector || undefined,
        operator: data.operator || undefined,
      }
    });

    return {
      msg: 'Process Updated'
    };
  }

  public async remove(deleteprocessDto: HandleProcessDto) {
    await this.prisma.process.delete({
      where: {
        id: deleteprocessDto.id
      }
    });

    return {
      msg: 'Process Deleted'
    };
  }
}

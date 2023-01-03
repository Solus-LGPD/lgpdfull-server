import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInventoryDto } from './dtos/create-inventory.dto';
import { FindInventoryDto } from './dtos/find-inventory.dto';
import { HandleInventoryDto } from './dtos/handle-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    private readonly prisma:PrismaService
  ){}
  
  public async create(createInventoryDto: CreateInventoryDto) {
    const data = {
      ...createInventoryDto
    }

    const date = new Date()

    const countInventory = await this.prisma.user.count();

    const referenceId = data.employeeSector + '-' + countInventory;

    const createdInventory = await this.prisma.inventory.create({
      data: {
        user_id: data.userId,
        dpo_id: data.dpoId,
        updated_at: new Date(date.getUTCDate()),
        dpo_name: data.dpoName,
        controller: data.controller,
        operator: data.operator,
        reference_id: referenceId
      }
    });

    return createdInventory;
  }

  public async findAll(findInventoryDto: FindInventoryDto) {
    const docs = this.prisma.inventory.findMany({
      where: {
        user_id: findInventoryDto.userId
      }
    });

    return docs;
  }

  //Donwload do PDF
  /*
  downloadOne(id: string) {
    return `This action returns a inventory`;
  }*/

  public async update(updateInventoryDto: HandleInventoryDto) {
    const data = {
      ...updateInventoryDto
    }

    const date = new Date();

    await this.prisma.inventory.update({
      where: {
        id: data.id
      },
      data: {
        updated_at: new Date(date.getUTCDate()),
        dpo_name: data.dpoName || undefined,
        controller: data.dpoName || undefined,
        operator: data.dpoName || undefined
      }
    });

    return {
      msg: 'Process Updated'
    };
  }

  public async remove(deleteInventoryDto: HandleInventoryDto) {
    await this.prisma.lyfeCycle.delete({
      where: {
        invt_id: deleteInventoryDto.id
      }
    });

    await this.prisma.dataFlowDesc.delete({
      where: {
        invt_id: deleteInventoryDto.id
      }
    });

    await this.prisma.dataScope.delete({
      where: {
        invt_id: deleteInventoryDto.id
      }
    });

    await this.prisma.dataFinality.delete({
      where: {
        invt_id: deleteInventoryDto.id
      }
    });

    await this.prisma.dataTreatmentInfo.delete({
      where: {
        invt_id: deleteInventoryDto.id
      }
    });

    await this.prisma.dataShare.delete({
      where: {
        invt_id: deleteInventoryDto.id
      }
    });

    await this.prisma.personalDataCategory.delete({
      where: {
        invt_id: deleteInventoryDto.id
      }
    });

    await this.prisma.inventory.delete({
      where: {
        id: deleteInventoryDto.id
      }
    });

    return {
      msg: 'Inventory Deleted'
    };
  }
}

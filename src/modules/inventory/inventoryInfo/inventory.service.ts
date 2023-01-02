import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

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

  findAll() {
    return `This action returns all inventory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventory`;
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}

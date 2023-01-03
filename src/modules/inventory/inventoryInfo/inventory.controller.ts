import { Controller, Post, Body, Delete, Put } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { HandleInventoryDto } from './dto/handle-inventory.dto';
import { FindInventoryDto } from './dto/find-inventory.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }

  @Post()
  findAll(@Body() findInventoryDto: FindInventoryDto) {
    return this.inventoryService.findAll(findInventoryDto);
  }

  /*
  @Get(':id')
  downloadOne(@Param('id') id: string) {
    return this.inventoryService.findOne(+id);
  }*/

  @Put('update')
  update(@Body() handleInventoryDto: HandleInventoryDto) {
    return this.inventoryService.update(handleInventoryDto);
  }

  @Delete('remove')
  remove(@Body() handleInventoryDto: HandleInventoryDto) {
    return this.inventoryService.remove(handleInventoryDto);
  }
}

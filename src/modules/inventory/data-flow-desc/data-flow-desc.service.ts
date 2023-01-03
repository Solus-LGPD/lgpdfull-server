import { Injectable } from '@nestjs/common';
import { CreateDataFlowDescDto } from './dto/create-data-flow-desc.dto';
import { UpdateDataFlowDescDto } from './dto/update-data-flow-desc.dto';

@Injectable()
export class DataFlowDescService {
  create(createDataFlowDescDto: CreateDataFlowDescDto) {
    return 'This action adds a new dataFlowDesc';
  }

  findAll() {
    return `This action returns all dataFlowDesc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dataFlowDesc`;
  }

  update(id: number, updateDataFlowDescDto: UpdateDataFlowDescDto) {
    return `This action updates a #${id} dataFlowDesc`;
  }

  remove(id: number) {
    return `This action removes a #${id} dataFlowDesc`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateDpoDto } from './dto/create-dpo.dto';
import { UpdateDpoDto } from './dto/update-dpo.dto';

@Injectable()
export class DpoService {
  create(createDpoDto: CreateDpoDto) {
    return 'This action adds a new dpo';
  }

  findAll() {
    return `This action returns all dpo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dpo`;
  }

  update(id: number, updateDpoDto: UpdateDpoDto) {
    return `This action updates a #${id} dpo`;
  }

  remove(id: number) {
    return `This action removes a #${id} dpo`;
  }
}

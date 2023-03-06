import { Injectable } from '@nestjs/common';
import { DpoRepository } from 'src/infra/database/prisma/repositories/dpo.repository';
import { UsersRepository } from 'src/infra/database/prisma/repositories/user.repository';
import { CreateDpoDto } from 'src/infra/http/dtos/create-dpo.dto';
import { UpdateDpoDto } from '../../infra/http/dtos/update-dpo.dto';
import { NotFoundError } from '../common/errors/types/NotFoundError';

@Injectable()
export class DpoService {

  constructor(
    private readonly repository: DpoRepository,
    private readonly userRepository: UsersRepository
  ){}

  public create(createDpoDto: CreateDpoDto) {
    return this.repository.create(createDpoDto);
  }

  public async findOne(id: string){
    if(!(await this.repository.findById(id))){
      throw new NotFoundError('ID do DPO não encontrado!')
    }

    return this.repository.findOne(id);
  }

  public async findAll(id: string) {
    if(!(await this.userRepository.findById(id))){
      throw new NotFoundError('ID do usuário não encontrado!')
    }

    return this.repository.findAll(id);
  }

  public async update(id: string, updateDpoDto: UpdateDpoDto) {
    if(!(await this.repository.findById(id))){
      throw new NotFoundError('ID do DPO não encontrado!')
    }

    return this.repository.update(id, updateDpoDto);
  }

  public async remove(id: string){
    if(!(await this.repository.findById(id))){
      throw new NotFoundError('ID do DPO não encontrado!')
    }

    return this.repository.remove(id);
  }
}

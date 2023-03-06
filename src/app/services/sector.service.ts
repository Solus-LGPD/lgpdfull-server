import { Injectable } from '@nestjs/common';
import { CreateSectorDto } from '../../infra/http/dtos/create-sector.dto';
import { UpdateSectorDto } from 'src/infra/http/dtos/update-sector.dto';
import { SectorEntity } from '../entities/sector.entity';
import { UsersRepository } from 'src/infra/database/prisma/repositories/user.repository';
import { NotFoundError } from '../common/errors/types/NotFoundError';
import { SectorRepository } from '../../infra/database/prisma/repositories/sector.repository';

@Injectable()
export class SectorService {
  constructor(
    private readonly repository: SectorRepository,
    private readonly userRepository: UsersRepository
  ){}

  public create(createSectorDto: CreateSectorDto): Promise<SectorEntity> {
    return this.repository.create(createSectorDto);
  }

  public async findAll(id: string): Promise<SectorEntity[]> {
    if(!(await this.userRepository.findById(id))){
      throw new NotFoundError('ID do usuário não encontrado!')
    }

    return this.repository.findAll(id);
  }

  public async findOne(id: string): Promise<SectorEntity> {
    if(!(await this.repository.findById(id))){
      throw new NotFoundError('ID do setor não encontrado!')
    }

    return this.repository.findOne(id);
  }

  public async update(id: string, updateSectorDto:UpdateSectorDto): Promise<SectorEntity> {
    if(!(await this.repository.findById(id))){
      throw new NotFoundError('ID do setor não encontrado!')
    }

    return this.repository.update(id, updateSectorDto);
  }

  public async remove(id: string) {
    if(!(await this.repository.findById(id))){
      throw new NotFoundError('ID do setor não encontrado!')
    }

    await this.repository.remove(id);
  }
}

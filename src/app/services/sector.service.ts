import { Injectable } from '@nestjs/common';
import { CreateSectorDto } from '../../infra/http/dtos/create-sector.dto';
import { UpdateSectorDto } from 'src/infra/http/dtos/update-sector.dto';
import { SectorEntity } from '../entities/sector.entity';

@Injectable()
export class SectorService {
  constructor(
    private readonly repository: SectorService
  ){}

  public async create(createSectorDto: CreateSectorDto): Promise<SectorEntity> {
    return this.repository.create(createSectorDto);
  }

  public findAll(id: string): Promise<SectorEntity[]> {
    return this.repository.findAll(id);
  }

  public findOne(id: string): Promise<SectorEntity> {
    return this.repository.findOne(id);
  }

  public update(id: string, updateSectorDto:UpdateSectorDto): Promise<SectorEntity> {
    return this.repository.update(id, updateSectorDto);
  }

  public async remove(id: string) {
    await this.repository.remove(id);
  }
}

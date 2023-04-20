import { Injectable } from "@nestjs/common";
import { ProgressionRepository } from "../interfaces/repositories/progression-port.repository";
import { ProgressionEntity } from "../entities/progression.entity";
import { NotFoundError } from "../common/errors/types/NotFoundError";
import { UpdateProgressionDto } from "src/infra/http/dtos/update-progression";
import { UserRepository } from "../interfaces/repositories/user-port.repository";

@Injectable()
export class ProgressionService {
    constructor(
        private readonly repository: ProgressionRepository,
        private readonly userRepository: UserRepository
    ){}

    public async findOne(id: string): Promise<ProgressionEntity>{
        const entity = await this.repository.findById(id);

        if(!entity){
            throw new NotFoundError('ID do inventário não encontrado!');
        }

        return entity;
    }

    public async upsert(id: string, updateProgressionDto: UpdateProgressionDto): Promise<ProgressionEntity>{
        if(!(await this.userRepository.findById(id))){
            throw new NotFoundError('ID do usuário não encontrado!');
        }

        const arrayProgressionFormated = updateProgressionDto.arrayProgression.toString();

        return this.repository.upsert(id, arrayProgressionFormated);
    }
}

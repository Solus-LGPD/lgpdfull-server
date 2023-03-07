import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { CreateQuizDto } from '../../infra/http/dtos/create-quiz.dto';
import { QuizRepository } from 'src/infra/database/prisma/repositories/quiz.repository';
import { UsersRepository } from 'src/infra/database/prisma/repositories/user.repository';
import { NotFoundError } from '../common/errors/types/NotFoundError';

@Injectable()
export class QuizService {
  constructor(
    private readonly repository: QuizRepository,
    private readonly userRepository: UsersRepository
  ){}

  public async create(createQuizDto: CreateQuizDto) {
    return this.repository.create(createQuizDto);
  }

  public async findAll(id:string) {
    if(!(await this.userRepository.findById(id))){
      throw new NotFoundError('ID do usuário não encontrado!')
    }
    return await this.repository.findAll(id);
  }

  public async findOne(id: string) {
    if(!(await this.repository.findById(id))){
      throw new NotFoundError('ID do quiz não encontrado!')
    }
    return this.repository.findOne(id);
  }

  public async remove(id: string) {
    if(!(await this.repository.findById(id))){
      throw new NotFoundError('ID do quiz não encontrado!')
    }
    return this.repository.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { CreateQuizDto } from '../../infra/http/dtos/create-quiz.dto';
import { UpdateQuizDto } from 'src/infra/http/dtos/update-quiz.dto';
import { QuizRepository } from 'src/infra/database/prisma/repositories/quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    private readonly repository: QuizRepository
  ){}

  public async create(createQuizDto: CreateQuizDto) {
    return this.repository.create(createQuizDto);
  }

  public async findAll(id:string) {
    return this.repository.findAll(id);
  }

  public async findOne(id: string) {
    return this.repository.findOne(id);
  }

  public async remove(id: string) {
    return this.repository.remove(id);
  }
}

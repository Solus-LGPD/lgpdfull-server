import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { CreateQuizDto } from '../../infra/http/dtos/create-quiz.dto';
import { UpdateQuizDto } from './dtos/update-quiz.dto';

@Injectable()
export class QuizService {
  constructor(
    private readonly prisma:PrismaService
  ){}

  public async create(createQuizDto: CreateQuizDto) {
    const data = {
      ...createQuizDto
    };

    await this.prisma.quiz.create({
      data: {
        ...data
      }
    });

    return {
      msg:"Quiz registered"
    };
  }

  public async findAll(id:string) {

    const quizes = await this.prisma.quiz.findMany({
      where:{
        userId: id
      },
      select:{
        id: true,
        answers: true,
        result: true,
        createdAt: true
      }
    });

    return quizes;
  }

  public async findOne(id: string) {

    const quiz = await this.prisma.quiz.findUnique({
      where:{
        id
      },
      select:{
        id: true,
        answers: true,
        result: true,
        createdAt: true
      }
    });

    return quiz;
  }

  public async update(id: string, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  public async remove(id: string) {

    await this.prisma.quiz.delete({
      where:{
        id
      }
    })

    return `This action removes a #${id} quiz`;
  }
}

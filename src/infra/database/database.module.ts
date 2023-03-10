import { Module } from '@nestjs/common';
import { DpoRepository } from 'src/app/ports/repositories/dpo-port.repository';
import { MappingRepository } from 'src/app/ports/repositories/mapping-port.repository';
import { QuizRepository } from 'src/app/ports/repositories/quiz-port.repository';
import { SectorRepository } from 'src/app/ports/repositories/sector-port.repository';
import { UserRepository } from 'src/app/ports/repositories/user-port.repository';
import { PrismaService } from './prisma/prisma.service';
import { DpoPrismaRepository } from './prisma/repositories/dpo-prisma.repository';
import { MappingPrismaRepository } from './prisma/repositories/mapping-prisma.repository';
import { QuizPrismaRepository } from './prisma/repositories/quiz-prisma.repository';
import { SectorPrismaRepository } from './prisma/repositories/sector-prisma.repository';
import { UserPrismaRepository } from './prisma/repositories/user-prisma.repository';

@Module({
  providers: [ 
    PrismaService,
    {
      provide: DpoRepository,
      useClass: DpoPrismaRepository
    },  
    {
      provide: MappingRepository,
      useClass: MappingPrismaRepository
    },  
    {
      provide: QuizRepository,
      useClass: QuizPrismaRepository
    },  
    {
      provide: SectorRepository,
      useClass: SectorPrismaRepository
    }, 
    {
      provide: UserRepository,
      useClass: UserPrismaRepository
    }
  ],
  exports: [
    DpoRepository, 
    MappingRepository, 
    QuizRepository, 
    SectorRepository, 
    UserRepository
  ]
})
export class DatabaseModule {}

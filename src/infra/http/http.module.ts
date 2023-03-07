import { Module } from '@nestjs/common';
import { AuthService } from 'src/app/services/auth.service';
import { DpoService } from 'src/app/services/dpo.service';
import { MappingService } from 'src/app/services/mapping.service';
import { QuizService } from 'src/app/services/quiz.service';
import { SectorService } from 'src/app/services/sector.service';
import { UserService } from 'src/app/services/user.service';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from './controllers/auth/auth.module';

@Module({
    imports:[AuthModule, DatabaseModule],
    providers: [
        DpoService,
        MappingService,
        QuizService,
        SectorService,
        UserService
    ]
})
export class HttpModule {}

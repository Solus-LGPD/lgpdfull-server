import { Module } from '@nestjs/common';
import { DpoService } from 'src/app/services/dpo.service';
import { MappingService } from 'src/app/services/mapping.service';
import { QuizService } from 'src/app/services/quiz.service';
import { SectorService } from 'src/app/services/sector.service';
import { UserService } from 'src/app/services/user.service';
import { AdaptersModule } from '../adapters/adapters.module';
import { BcryptService } from '../adapters/bcrypt.service';
import { GeneratePasswordService } from '../adapters/generate-password.service';
import { MailerService } from '../adapters/mailer.service';
import { DatabaseModule } from '../database/database.module';
import { AppController } from './controllers/app.controller';
import { AuthModule } from './controllers/auth/auth.module';
import { DpoController } from './controllers/dpo.controller';
import { MappingController } from './controllers/mapping.controller';
import { QuizController } from './controllers/quiz.controller';
import { SectorController } from './controllers/sector.controller';
import { UserController } from './controllers/user.controller';

@Module({
    imports:[DatabaseModule, AuthModule, AdaptersModule],
    controllers:[
        AppController,
        DpoController,
        MappingController,
        QuizController,
        SectorController,
        UserController
    ],
    providers: [
        DpoService,
        MappingService,
        QuizService,
        SectorService,
        UserService,
        MailerService
    ]
})
export class HttpModule {}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from '../../../../app/services/auth.service';
import { LoginValidationMiddleware } from '../../../../app/auth/middlewares/login-validation.middleware';
import { JwtStrategy } from '../../../../app/auth/strategies/jwt-strategy';
import { LocalStrategy } from '../../../../app/auth/strategies/local.strategy';
import { UserService } from 'src/app/services/user.service';
import { BcryptService } from 'src/infra/adapters/bcrypt.service';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GeneratePasswordService } from 'src/infra/adapters/generate-password.service';
import { MailerService } from 'src/infra/adapters/mailer.service';
import { AdaptersModule } from 'src/infra/adapters/adapters.module';

@Module({
  imports:[ DatabaseModule, AdaptersModule, PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '30d' }
  })],
  controllers: [AuthController],
  providers: [ AuthService, UserService, BcryptService, GeneratePasswordService, MailerService, LocalStrategy, JwtStrategy]
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('login');
  }
}

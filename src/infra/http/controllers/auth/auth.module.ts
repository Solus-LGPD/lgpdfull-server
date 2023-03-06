import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from '../../../../app/services/auth.service';
import { LoginValidationMiddleware } from '../../../../app/auth/middlewares/login-validation.middleware';
import { JwtStrategy } from '../../../../app/auth/strategies/jwt-strategy';
import { LocalStrategy } from '../../../../app/auth/strategies/local.strategy';
import { UserService } from 'src/app/services/user.service';

@Module({
  imports:[PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '30d' }
  })],
  controllers: [AuthController],
  providers: [ UserService, AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('login');
  }
}

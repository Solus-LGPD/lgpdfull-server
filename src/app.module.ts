import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { DpoModule } from './modules/dpo/dpo.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, AuthModule, PrismaModule, DpoModule],
  controllers: [AppController],
  providers: [AppService,     {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule {}

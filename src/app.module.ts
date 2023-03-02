import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './infra/http/controllers/app.controller';
import { JwtAuthGuard } from './app/services/auth/guards/jwt-auth.guard';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }]
})
export class AppModule {}
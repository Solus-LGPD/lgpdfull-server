import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './infra/http/controllers/app.controller';
import { JwtAuthGuard } from './app/auth/guards/jwt-auth.guard';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [AppController],
  providers: [{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }]
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtAuthGuard } from './routes/auth/guards/jwt-auth.guard';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [RoutesModule],
  controllers: [AppController],
  providers: [AppService,     {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule {}
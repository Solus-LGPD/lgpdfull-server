import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, UserModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

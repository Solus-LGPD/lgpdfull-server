import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { DpoModule } from './dpo/dpo.module';
import { UserModule } from './user/user.module';
import { MappingModule } from './data-mapping/mapping.module';
import { SectorModule } from './sector/sector.module';

@Module({
    imports:[ UserModule, AuthModule, PrismaModule, DpoModule, MappingModule, SectorModule ]
})
export class RoutesModule {}

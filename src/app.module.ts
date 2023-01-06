import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './routes/auth/auth.module';
import { JwtAuthGuard } from './routes/auth/guards/jwt-auth.guard';
import { DpoModule } from './routes/dpo/dpo.module';
import { DataFinalityModule } from './routes/inventory/data-finality/data-finality.module';
import { DataFlowDescModule } from './routes/inventory/data-flow-desc/data-flow-desc.module';
import { DataScopeModule } from './routes/inventory/data-scope/data-scope.module';
import { DataShareModule } from './routes/inventory/data-share/data-share.module';
import { DataTreatmentModule } from './routes/inventory/data-treatment/data-treatment.module';
import { InventoryModule } from './routes/inventory/inventory-Info/inventory.module';
import { LifeCycleModule } from './routes/inventory/life-cycle/life-cycle.module';
import { PersonalDataCategoryModule } from './routes/inventory/personal-data-category/personal-data-category.module';
import { ProcessModule } from './routes/process/process.module';
import { UserModule } from './routes/user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, AuthModule, PrismaModule, DpoModule, ProcessModule, InventoryModule, LifeCycleModule, DataFlowDescModule, DataScopeModule, DataFinalityModule, DataTreatmentModule, DataShareModule, PersonalDataCategoryModule],
  controllers: [AppController],
  providers: [AppService,     {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule {}
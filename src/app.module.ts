import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { DpoModule } from './modules/dpo/dpo.module';
import { DataFinalityModule } from './modules/inventory/data-finality/data-finality.module';
import { DataFlowDescModule } from './modules/inventory/data-flow-desc/data-flow-desc.module';
import { DataScopeModule } from './modules/inventory/data-scope/data-scope.module';
import { DataShareModule } from './modules/inventory/data-share/data-share.module';
import { DataTreatmentModule } from './modules/inventory/data-treatment/data-treatment.module';
import { InventoryModule } from './modules/inventory/inventory-Info/inventory.module';
import { LifeCycleModule } from './modules/inventory/life-cycle/life-cycle.module';
import { PersonalDataCategoryModule } from './modules/inventory/personal-data-category/personal-data-category.module';
import { ProcessModule } from './modules/process/process.module';
import { UserModule } from './modules/user/user.module';
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
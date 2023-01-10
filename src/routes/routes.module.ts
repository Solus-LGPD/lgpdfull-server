import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { DpoModule } from './dpo/dpo.module';
import { DataFinalityModule } from './inventory/data-finality/data-finality.module';
import { DataFlowDescModule } from './inventory/data-flow-desc/data-flow-desc.module';
import { DataScopeModule } from './inventory/data-scope/data-scope.module';
import { DataShareModule } from './inventory/data-share/data-share.module';
import { DataTreatmentModule } from './inventory/data-treatment/data-treatment.module';
import { InventoryModule } from './inventory/inventory-Info/inventory.module';
import { LifeCycleModule } from './inventory/life-cycle/life-cycle.module';
import { PersonalDataCategoryModule } from './inventory/personal-data-category/personal-data-category.module';
import { ProcessModule } from './process/process.module';
import { UserModule } from './user/user.module';

@Module({
    imports:[ UserModule, AuthModule, PrismaModule, DpoModule, ProcessModule, InventoryModule, LifeCycleModule, DataFlowDescModule, DataScopeModule, DataFinalityModule, DataTreatmentModule, DataShareModule, PersonalDataCategoryModule ]
})
export class RoutesModule {}

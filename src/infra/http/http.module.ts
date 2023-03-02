import { Module } from '@nestjs/common';
import { AuthModule } from './controllers/auth/auth.module';

@Module({
    imports:[AuthModule],
    providers: []
})
export class HttpModule {}

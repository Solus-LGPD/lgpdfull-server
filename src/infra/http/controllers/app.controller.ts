import { Controller, Get } from '@nestjs/common';
import { IsPublic } from 'src/app/services/auth/decorators/is-public.decorator';

@Controller()
export class AppController {

  @IsPublic()
  @Get()
  getHello(){
    return 'Hello';
  }
}
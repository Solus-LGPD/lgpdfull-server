import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IsPublic } from 'src/routes/auth/decorators/is-public.decorator';
import { CurrentUser } from 'src/routes/auth/decorators/current-user.decorator';
import { User } from 'src/routes/user/entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @IsPublic()
  @Get()
  getHello(){
    return this.appService.getHello();
  }

  @Get('/me')
  getMe(@CurrentUser() currentUser: User) {
    return currentUser;
  }
}
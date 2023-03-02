import { Controller, Get, Post, Body, Patch, Put, Delete, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { IsPublic } from '../../../app/services/auth/decorators/is-public.decorator';
import { UserService } from 'src/app/services/user.service';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @IsPublic()
  @Put(':email')
  savePass(@Param('email') email: string) {
    return this.userService.savePass(email);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.userService.findOne();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  updateEmail(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUserData(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UpdatePassDto } from './dtos/update-pass.dto';
import { DeleteUserDto } from './dtos/delete-user.dto';
import { SaveDto } from './dtos/save-pass-user.dto';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @IsPublic()
  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('all')
  findAll() {
    return this.userService.findAll();
  }

  @Patch('email')
  @HttpCode(HttpStatus.OK)
  updateEmail(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateEmail(updateUserDto);
  }

  
  @Patch('pass')
  @HttpCode(HttpStatus.OK)
  updatePass(@Body() updatePassDto: UpdatePassDto) {
    return this.userService.updatePassword(updatePassDto);
  }

  @IsPublic()
  @Post('save-password')
  savePass(@Body() saveDto: SaveDto) {
    return this.userService.savePass(saveDto);
  }

  @Delete('delete')
  remove(@Body() deleteUserDto: DeleteUserDto) {
    return this.userService.remove(deleteUserDto.id);
  }
}

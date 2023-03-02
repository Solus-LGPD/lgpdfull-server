import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../infra/http/dtos/create-user.dto';
import { InsertUserDto } from 'src/infra/http/dtos/insert-db-user.dto';
import { UsersRepository } from 'src/infra/database/prisma/repositories/user.repository';
import { ConflictError } from '../common/errors/types/ConflictError';
import { GeneratePasswordService } from '../adapters/generate-password.service';
import { EmailService } from '../adapters/email.service';
import { EncryptService } from '../adapters/encrypt.service';
import { NotFoundError } from '../common/errors/types/NotFoundError';
import { UpdateUserPassDto } from 'src/infra/http/dtos/update-user-pass.dto';
import { UpdateUserDto } from 'src/infra/http/dtos/update-user.dto';


@Injectable()
export class UserService {
  constructor(
    private readonly repository: UsersRepository,
    private readonly passwordGeneratorService: GeneratePasswordService,
    private readonly emailService: EmailService,
    private readonly encryptService: EncryptService
  ) { }

  public async create(createUserDto: CreateUserDto)  {
    if(await this.repository.findByEmail(createUserDto.email)){
      throw new ConflictError("Este e-mail já foi registrado!");
    }

    const pass = this.passwordGeneratorService.generate();

    const insertUserDto: InsertUserDto = {
      ...createUserDto,
      pass: await this.encryptService.encryptPassword(pass)
    };

    const user = await this.repository.create(insertUserDto);
    
    await this.emailService.sendPasswordEmail(user.email, pass);

    return user;
  }

  public findAll() {
    return this.repository.findAll();
  }

  public async update(id: string, updateUserDto: UpdateUserDto) {
    if(await this.repository.findById(id)){
      throw new NotFoundError("ID não encontrado para a atualização!");
    }

    const user = await this.repository.update(id, updateUserDto);

    return user;
  }

  public async updatePassword(id: string, updateUserPassDto: UpdateUserPassDto) {
    const user = await this.repository.findById(id);

    if(!user){
      throw new NotFoundError("ID não encontrado para a atualização!");
    }

    const isPassValid = await this.encryptService.comparePasswords(updateUserPassDto.newPass, user.pass);
    
    if(!isPassValid){
      throw new ConflictError("A senha atual está incorreta.");
    }

    await this.repository.updatePass(id, updateUserPassDto);

    return {
      message: "Senha alterada!"
    };
  }

  public async remove(id: string) {
    if(await this.repository.findById(id)){
      throw new NotFoundError("ID não encontrado para a atualização!");
    }

    await this.repository.remove(id);

    return {
      message: "Usuário desativado!"
    }
  }

  public async savePass(email: string) {
    const user = await this.repository.findByEmail(email);
    
    if(!user){
      throw new ConflictError("E-mail não encontrado!");
    }

    const newPass = this.passwordGeneratorService.generate();

    await this.repository.updateSavePass(user.id, await this.encryptService.encryptPassword(newPass));

    await this.emailService.sendNewPasswordEmail(email, newPass);

    return {
      message: "Nova senha enviada!"
    }
  }
}
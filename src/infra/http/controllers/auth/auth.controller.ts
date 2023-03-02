import { Request, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../../../../app/services/auth/auth.service';
import { IsPublic } from '../../../../app/services/auth/decorators/is-public.decorator';
import { LocalAuthGuard } from '../../../../app/services/auth/guards/local-auth.guard';
import { AuthRequest } from '../../../../app/services/auth/models/AuthRequest';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @IsPublic()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@Request() req: AuthRequest){
        return this.authService.login(req.user)
    }
}


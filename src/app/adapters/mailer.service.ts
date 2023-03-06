import { Injectable } from "@nestjs/common";
import * as nodemailer from 'nodemailer';
import { ServiceError } from "../common/errors/types/ServiceError";
import { EmailTemplateService } from "./email-template.service";

@Injectable()
export class MailerService{

    constructor(
        private readonly emailTemplate: EmailTemplateService
    ){}

    public async sendPasswordEmail(email: string, password: string){

        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port:  465,
            secure: true,
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
        
        await transport.sendMail({
            from: "Solus LGPD <solusit2022@gmail.com",
            to: email,
            subject: 'Senha de acesso ao sistema LGPDFull',
            html: this.emailTemplate.emailRegisterTemplate(password, email),
            text: `Nova senha: ${password}`
        })
        .catch((err) => {
            throw new ServiceError("O Serviço de e-mail está indisponível!")
        })
    }

    public async sendNewPasswordEmail(email: string, newPassword: string){

        const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port:  465,
        secure: true,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
        })
      

        await transport.sendMail({
            from: "Solus LGPD <solusit2022@gmail.com",
            to: email,
            subject: 'Senha de acesso ao Sistema LGPDFull',
            html: this.emailTemplate.savePasswordEmailTemplate(newPassword),
            text: `Nova senha: ${newPassword}`
        })
        .catch((err) => {
            throw new ServiceError("O Serviço de e-mail está indisponível!")
        })
    }

}
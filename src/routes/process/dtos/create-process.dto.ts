import { 
    IsNotEmpty, 
    IsEmail, 
    IsOptional,
    IsString,
} from "class-validator";

export class CreateProcessDto {
    @IsNotEmpty()
    @IsString()
    userId:string;

    @IsNotEmpty()
    @IsString()
    dpoId:string;

    @IsNotEmpty()
    @IsString()
    operator: string;

    @IsNotEmpty()
    @IsString()
    dataFlow: string;

    @IsNotEmpty()
    @IsString()
    controller: string;

    @IsNotEmpty()
    @IsString()
    employeeSector: string;
}

import { 
    IsNotEmpty,
    IsString,
} from "class-validator";

export class CreateInventoryDto {
    @IsNotEmpty()
    @IsString()
    userId:string;

    @IsNotEmpty()
    @IsString()
    dpoId: string;

    @IsNotEmpty()
    @IsString()
    dpoName: string;

    @IsNotEmpty()
    @IsString()
    controller: string;

    @IsNotEmpty()
    @IsString()
    employeeSector: string;

    @IsNotEmpty()
    @IsString()
    operator: string;
}

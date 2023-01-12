import { IsNotEmpty, IsString } from "class-validator";

export class CreateDataShareDto {
    @IsNotEmpty()
    @IsString()
    invtId:string;

    @IsNotEmpty()
    @IsString()
    name:string
    
    @IsNotEmpty()
    @IsString()
    description:string
}

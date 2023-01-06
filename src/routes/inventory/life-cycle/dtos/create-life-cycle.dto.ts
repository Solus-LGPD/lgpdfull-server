import { 
    IsNotEmpty, 
    IsBoolean,
    IsString
} from "class-validator";

export class CreateLifeCycleDto {
    @IsNotEmpty()
    @IsString()
    invtId:string;

    @IsNotEmpty()
    @IsBoolean()
    collect:boolean;

    @IsNotEmpty()
    @IsBoolean()
    store:boolean;

    @IsNotEmpty()
    @IsBoolean()
    use:boolean;

    @IsNotEmpty()
    @IsBoolean()
    share:boolean;

    @IsNotEmpty()
    @IsBoolean()
    destroy:boolean;
}

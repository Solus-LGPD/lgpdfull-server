import { 
    IsNotEmpty, 
    IsString
} from "class-validator";

export class CreateDataFlowDescDto {
    @IsNotEmpty()
    @IsString()
    invtId:string;

    @IsNotEmpty()
    @IsString()
    collect:string;

    @IsNotEmpty()
    @IsString()
    store:string;

    @IsNotEmpty()
    @IsString()
    use:string;

    @IsNotEmpty()
    @IsString()
    share:string;

    @IsNotEmpty()
    @IsString()
    destroy:string;
}

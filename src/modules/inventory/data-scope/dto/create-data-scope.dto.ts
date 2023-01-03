import { 
    IsNotEmpty, 
    IsString
} from "class-validator";

export class CreateDataScopeDto {
    @IsNotEmpty()
    @IsString()
    invtId: string;

    @IsNotEmpty()
    @IsString()
    geographic_area:string;

    @IsNotEmpty()
    @IsString()
    source:string;
}

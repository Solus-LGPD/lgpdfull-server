import { 
    IsNotEmpty, 
    IsString
} from "class-validator";

export class CreateDataTreatmentDto {
    @IsNotEmpty()
    @IsString()
    invtId:string;

    @IsNotEmpty()
    @IsString()
    frequency:string;

    @IsNotEmpty()
    @IsString()
    quantity:number;

    @IsNotEmpty()
    @IsString()
    categoryInfo:string;

    @IsNotEmpty()
    @IsString()
    dataUnderAge:boolean;

    @IsNotEmpty()
    @IsString()
    dataVulnerableGroup:boolean;
}

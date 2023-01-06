import { 
    IsNotEmpty, 
    IsString
} from "class-validator";

export class CreateDataFinalityDto {
    @IsNotEmpty()
    @IsString()
    invtId:string;

    @IsNotEmpty()
    @IsString()
    case:string;

    @IsNotEmpty()
    @IsString()
    purpose:string;

    @IsNotEmpty()
    @IsString()
    goals:string;

    @IsNotEmpty()
    @IsString()
    expected_profits:string;

    @IsNotEmpty()
    @IsString()
    legal_forecast:string;
}

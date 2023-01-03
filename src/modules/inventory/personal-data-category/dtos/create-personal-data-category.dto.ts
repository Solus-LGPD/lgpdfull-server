import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePersonalDataCategoryDto {
    @IsNotEmpty()
    @IsString()
    invtId:string;
    
    @IsOptional()
    @IsString()
    personalData:string;
    
    @IsOptional()
    @IsString()
    financialData:string;

    @IsOptional()
    @IsString()
    characaterData:string;

    @IsOptional()
    @IsString()
    habitsData:string;

    @IsOptional()
    @IsString()
    psicologicalData:string;

    @IsOptional()
    @IsString()
    familyData:string;

    @IsOptional()
    @IsString()
    leisureData:string;

    @IsOptional()
    @IsString()
    associationData:string;

    @IsOptional()
    @IsString()
    legalData:string;

    @IsOptional()
    @IsString()
    consunptionData:string;

    @IsOptional()
    @IsString()
    residentialData:string;

    @IsOptional()
    @IsString()
    educationData:string;
}

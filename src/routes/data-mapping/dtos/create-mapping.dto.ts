import { 
    IsBoolean,
    IsNotEmpty, 
    IsString
} from "class-validator";

export class CreateMappingDto {
    @IsNotEmpty()
    @IsString()
    userId:string;

    @IsNotEmpty()
    @IsString()
    dpoId: string;

    @IsNotEmpty()
    @IsString()
    sectorId

    @IsNotEmpty()
    @IsString()
    tagName:        string

    @IsNotEmpty()
    @IsString()
    sourceData:     string

    @IsNotEmpty()
    @IsString()
    colletedData:   string

    @IsNotEmpty()
    @IsString()
    reasonData:     string

    @IsNotEmpty()
    @IsString()
    howStorage:     string

    @IsNotEmpty()
    @IsString()
    securityData:   string

    @IsNotEmpty()
    @IsString()
    deadlineData:   string

    @IsNotEmpty()
    @IsString()
    justification:  string

    @IsNotEmpty()
    @IsBoolean()
    underAgeData:   boolean

    @IsNotEmpty()
    @IsBoolean()
    sensitiveData:  boolean

    @IsNotEmpty()
    @IsString()
    controller:     string
}

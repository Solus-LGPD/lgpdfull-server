import {
    IsNotEmpty,
    IsString,
} from "class-validator";

export class CreateRIPDDto {
    @IsString()
    @IsNotEmpty()
    mappingName: string;

    @IsString()
    @IsNotEmpty()
    justification: string;
}

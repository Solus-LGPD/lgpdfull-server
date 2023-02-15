import { 
    IsNotEmpty, 
    IsString,
} from "class-validator";

export class CreateSectorDto {

    @IsNotEmpty()
    @IsString()
    user_id: string

    @IsNotEmpty()
    @IsString()
    tag_name: string
}

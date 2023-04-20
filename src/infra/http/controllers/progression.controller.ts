import { Body, Controller, Get, Param, Patch } from "@nestjs/common";
import { ProgressionService } from "src/app/use-cases/progression.service";
import { UpdateProgressionDto } from "../dtos/update-progression";

@Controller('progression')
export class ProgressionController {
    constructor(private readonly service: ProgressionService){}

    @Get(":id")
    findOne(@Param('id') id: string){
        return this.service.findOne(id);
    }

    @Patch()
    upsert(@Param('id') id: string, @Body() updateProgressionDto: UpdateProgressionDto){
        return this.service.upsert(id, updateProgressionDto);
    }
}

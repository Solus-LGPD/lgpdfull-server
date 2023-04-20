import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { ProgressionRepository } from "src/app/interfaces/repositories/progression-port.repository";
import { ProgressionEntity } from "src/app/entities/progression.entity";

@Injectable()
export class ProgressionPrismaRepository implements ProgressionRepository {
    constructor(
        private readonly prisma: PrismaService
    ){ }

    public async findById(userId: string): Promise<ProgressionEntity> {
        return this.prisma.progression.findFirst({
            where: {
                userId
            }
        });
    }

    public async upsert(userId: string, arrayProgression: string): Promise<ProgressionEntity> {
        return this.prisma.progression.upsert({
            where: {
                userId
            },
            update:{
                arrayProgression
            },
            create : {
                userId,
                arrayProgression
            }
        })
    }
}

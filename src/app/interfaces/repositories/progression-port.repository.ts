import { ProgressionEntity } from "src/app/entities/progression.entity";

export abstract class ProgressionRepository {
    abstract findById(userId: string): Promise<ProgressionEntity | null>;
    abstract upsert(userId: string, arrayProgression: string): Promise<ProgressionEntity>;
}

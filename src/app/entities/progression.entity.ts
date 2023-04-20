import { Progression } from "@prisma/client"

export class ProgressionEntity implements Progression {
    status: boolean;
    id: string;
    arrayProgression: string;
    userId: string;
}

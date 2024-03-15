import { Dpo } from "@prisma/client"

export class DpoEntity {
    id: string;
    name: string;
    socialName: string;
    actual: boolean;
    naturalPerson: boolean;
    email: string;
    createdAt: Date;
    userId: string;
    status: boolean | null;
}

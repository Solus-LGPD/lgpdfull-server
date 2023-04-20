import { RIPD } from "@prisma/client"

export class RIPDEntity implements RIPD{
    id: string;
    companyName: string;
    dpoName: string;
    justification: string;
    colletedData: string;
    sourceData: string;
    controller: string;
    securityData: string;
    deadlineData: string;
    userId: string;
    status: boolean;
    mappingName: string;
    mappingId: string;
}

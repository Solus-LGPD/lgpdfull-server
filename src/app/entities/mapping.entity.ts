
export class MappingEntity {
    id: string;
    dpoId: string;
    userId: string;
    sectorId: string;
    createdAt: Date;
    updatedAt: Date;
    tagName: string;
    sourceData: string;
    colletedData: string;
    reasonData: string;
    howStorage: string;
    securityData: string;
    deadlineData: string;
    justification: string;
    underAgeData: boolean;
    sensitiveData: boolean;
    controller: string;
    status: boolean | null;
}

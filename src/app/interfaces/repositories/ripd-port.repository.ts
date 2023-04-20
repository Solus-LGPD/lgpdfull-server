import { RIPDEntity } from "src/app/entities/ripd.entity";
import { CreateRIPDDto } from "src/infra/http/dtos/create-ripd.dto";

export abstract class RIPD {
    abstract create(createRIPDDto: CreateRIPDDto): Promise<RIPDEntity>;
    abstract findAll(id: string): Promise<RIPDEntity[]>;
    abstract findById(id: string): Promise<RIPDEntity | null>;
    abstract remove(id: string): Promise<void>;
}

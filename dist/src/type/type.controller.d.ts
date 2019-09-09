import { TypeService } from './type.service';
import { TypeDTO } from './type.dto';
export declare class TypeController {
    private typeService;
    constructor(typeService: TypeService);
    getTypees(): Promise<import("./type.entity").TypeEntity[]>;
    getType(id: string): Promise<import("./type.entity").TypeEntity>;
    create(data: TypeDTO): Promise<TypeDTO>;
    removeType(id: string): Promise<import("./type.entity").TypeEntity>;
}

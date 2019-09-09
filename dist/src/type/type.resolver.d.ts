import { TypeService } from 'src/type/type.service';
export declare class TypeResolver {
    private typeService;
    constructor(typeService: TypeService);
    types(): Promise<import("./type.entity").TypeEntity[]>;
}

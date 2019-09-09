import { BoxService } from './box.service';
import { BoxRQ } from './box.dto';
export declare class BoxController {
    private boxService;
    constructor(boxService: BoxService);
    readList(): Promise<import("./box.entity").BoxEntity[]>;
    read(id: string): Promise<import("./box.entity").BoxEntity>;
    create(data: BoxRQ): Promise<import("./box.dto").BoxDTO>;
}

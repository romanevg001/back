import { BoxService } from './box.service';
import { BoxEntity } from './box.entity';
export declare class BoxResolver {
    private readonly boxService;
    constructor(boxService: BoxService);
    boxes(page: number): Promise<BoxEntity[]>;
    box(id: string): Promise<BoxEntity>;
    createBox(name: string, psrObjectsIds: string[]): Promise<import("./box.dto").BoxDTO>;
}

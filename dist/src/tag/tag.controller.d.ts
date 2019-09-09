import { TagService } from './tag.service';
import { TagDTO } from './tag.dto';
export declare class TagController {
    private tagService;
    constructor(tagService: TagService);
    readList(): Promise<import("./tag.entity").TagEntity[]>;
    read(id: string): Promise<import("./tag.entity").TagEntity>;
    create(data: TagDTO): Promise<TagDTO>;
    destroy(id: string): Promise<import("./tag.entity").TagEntity>;
}

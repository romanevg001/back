import { TagService } from 'src/tag/tag.service';
export declare class TagResolver {
    private tagService;
    constructor(tagService: TagService);
    tags(page: number): Promise<import("./tag.entity").TagEntity[]>;
    tag(id: string): Promise<import("./tag.entity").TagEntity>;
}

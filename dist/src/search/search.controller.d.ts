import { SearchDTO } from './search.dto';
import { SearchService } from './search.service';
export declare class SearchController {
    private searchService;
    constructor(searchService: SearchService);
    find(body: Partial<SearchDTO>): Promise<{
        psrobjects: any;
        boxes: any;
    }>;
}

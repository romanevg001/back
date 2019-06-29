import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Iitem } from './interfaces/item.interface';
export declare class ItemsControllerParent {
    readonly itemsService: ItemsService;
}
export declare class ItemsController extends ItemsControllerParent {
    constructor();
    listItems(sss: any): Iitem[];
    getItem(paramId: string): Iitem;
    createItem(item: CreateItemDto): string;
    deleteItem(paramId: any): string;
}

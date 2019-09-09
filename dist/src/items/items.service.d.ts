import { Iitem } from './interfaces/item.interface';
export declare class ItemsService {
    private readonly items;
    findAll(): Iitem[];
    findOne(id: string): Iitem;
}

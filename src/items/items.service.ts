import { Injectable } from '@nestjs/common';
import { Iitem } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Iitem[] = [
    {
      id: '54612',
      name: 'Item one',
      description: 'This is item one',
      qty: 100,
    },
    {
      id: '65756',
      name: 'Item two',
      description: 'This is item two',
      qty: 50,
    },
    {
      id: '345432',
      name: 'Item three',
      description: 'This is item three',
      qty: 20,
    },
  ];

  findAll(): Iitem[] {
    return this.items;
  }

  findOne(id: string): Iitem {
    return this.items.find(el => el.id === id);
  }

}

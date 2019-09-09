"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let ItemsService = class ItemsService {
    constructor() {
        this.items = [
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
    }
    findAll() {
        return this.items;
    }
    findOne(id) {
        return this.items.find(el => el.id === id);
    }
};
ItemsService = __decorate([
    common_1.Injectable()
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map
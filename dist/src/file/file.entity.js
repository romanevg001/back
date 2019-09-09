"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const fs = require("fs");
var TypeOfFile;
(function (TypeOfFile) {
    TypeOfFile["pdf"] = "pdf";
    TypeOfFile["doc"] = "doc";
    TypeOfFile["img"] = "img";
    TypeOfFile["ppt"] = "ppt";
    TypeOfFile["xls"] = "xls";
    TypeOfFile["archive"] = "archive";
    TypeOfFile["video"] = "video";
})(TypeOfFile = exports.TypeOfFile || (exports.TypeOfFile = {}));
let FileEntity = class FileEntity {
    countSize() {
        return __awaiter(this, void 0, void 0, function* () {
            const stats = fs.statSync(this.file);
            this.size = stats.size;
        });
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], FileEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], FileEntity.prototype, "created", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], FileEntity.prototype, "updated", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: TypeOfFile,
        default: TypeOfFile.doc,
    }),
    __metadata("design:type", String)
], FileEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], FileEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], FileEntity.prototype, "file", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], FileEntity.prototype, "size", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FileEntity.prototype, "countSize", null);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], FileEntity.prototype, "range", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], FileEntity.prototype, "views", void 0);
FileEntity = __decorate([
    typeorm_1.Entity('file')
], FileEntity);
exports.FileEntity = FileEntity;
//# sourceMappingURL=file.entity.js.map
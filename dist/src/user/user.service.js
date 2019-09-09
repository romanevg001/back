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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcryptjs");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    showAll(page = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepository.find({
                relations: ['ideas', 'bookmarks'],
                skip: 25 * (page - 1),
                take: 25,
            });
            return users.map(user => user.toResponseObject(false));
        });
    }
    read(username, isShowPassword = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({
                where: { username },
                relations: ['ideas', 'bookmarks'],
            });
            if (!user) {
                throw new common_1.NotFoundException();
            }
            return user.toResponseObject(isShowPassword);
        });
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = data;
            const user = yield this.userRepository.findOne({ where: { username } });
            if (!user || !(yield user.comparePassword(password))) {
                throw new common_1.HttpException('Invalid username/password', common_1.HttpStatus.BAD_REQUEST);
            }
            return user.toResponseObject();
        });
    }
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = data;
            let user = yield this.userRepository.findOne({ where: { username } });
            if (user) {
                throw new common_1.HttpException('User already exist', common_1.HttpStatus.BAD_REQUEST);
            }
            user = yield this.userRepository.create(data);
            yield this.userRepository.save(user);
            return user.toResponseObject();
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { id } });
            if (user) {
                yield this.userRepository.update({ id }, data);
                const updateUser = yield this.userRepository.findOne({ where: { id } });
                return updateUser.toResponseObject();
            }
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.find();
        });
    }
    findByLogin(userDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = userDTO;
            const user = yield this.userRepository.findOne({ username });
            if (!user) {
                throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
            }
            if (yield bcrypt.compare(String(password), String(user.password))) {
                return this.sanitizeUser(user);
            }
            else {
                throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
            }
        });
    }
    findByPayload(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = payload;
            return yield this.userRepository.findOne({ username });
        });
    }
    sanitizeUser(user) {
        const sanitized = user;
        delete sanitized['password'];
        return sanitized;
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.delete({ id: userId });
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
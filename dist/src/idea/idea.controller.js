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
const idea_service_1 = require("./idea.service");
const idea_dto_1 = require("./idea.dto");
const auth_guard_1 = require("src/shared/auth.guard");
const user_decorator_1 = require("../user/user.decorator");
let IdeaController = class IdeaController {
    constructor(ideaService) {
        this.ideaService = ideaService;
        this.logger = new common_1.Logger('IdeaController');
    }
    logDate(options) {
        options.user && this.logger.log('USER ' + JSON.stringify(options.user));
        options.data && this.logger.log('DATA ' + JSON.stringify(options.body));
        options.id && this.logger.log('IDEA ' + JSON.stringify(options.id));
    }
    getList(page) {
        return this.ideaService.showAll(page);
    }
    showNewestIdeas(page) {
        return this.ideaService.showAll(page, true);
    }
    createIdea(userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logDate({ userId, data });
            if (data.idea) {
                return this.ideaService.create(userId, data);
            }
            else {
                return { error: 'Body is empty: ' + JSON.stringify(data) };
            }
        });
    }
    getOne(id) {
        return this.ideaService.read(id);
    }
    updateIdea(id, user, data) {
        return this.ideaService.update(id, user, data);
    }
    deleteIdea(id, user) {
        return this.ideaService.destroy(id);
    }
    upvoteIdea(id, user) {
        this.logDate({ id, user });
        return this.ideaService.upvote(id, user);
    }
    downvoteIdea(id, user) {
        this.logDate({ id, user });
        return this.ideaService.downvote(id, user);
    }
    bookmarkIdea(id, user) {
        this.logDate({ id, user });
        return this.ideaService.bookmark(id, user);
    }
    unbookmarkIdea(id, user) {
        this.logDate({ id, user });
        return this.ideaService.unbookmark(id, user);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IdeaController.prototype, "getList", null);
__decorate([
    common_1.Get('/newest'),
    __param(0, common_1.Query('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IdeaController.prototype, "showNewestIdeas", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, user_decorator_1.User('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, idea_dto_1.IdeaDTO]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "createIdea", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IdeaController.prototype, "getOne", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, common_1.Param('id')),
    __param(1, user_decorator_1.User('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], IdeaController.prototype, "updateIdea", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, common_1.Param('id')),
    __param(1, user_decorator_1.User('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], IdeaController.prototype, "deleteIdea", null);
__decorate([
    common_1.Post(':id/upvote'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, common_1.Param('id')),
    __param(1, user_decorator_1.User('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], IdeaController.prototype, "upvoteIdea", null);
__decorate([
    common_1.Post(':id/downvote'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, common_1.Param('id')),
    __param(1, user_decorator_1.User('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], IdeaController.prototype, "downvoteIdea", null);
__decorate([
    common_1.Post(':id/bookmark'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, common_1.Param('id')), __param(1, user_decorator_1.User('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], IdeaController.prototype, "bookmarkIdea", null);
__decorate([
    common_1.Delete(':id/bookmark'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, common_1.Param('id')), __param(1, user_decorator_1.User('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], IdeaController.prototype, "unbookmarkIdea", null);
IdeaController = __decorate([
    common_1.Controller('api/ideas'),
    __metadata("design:paramtypes", [idea_service_1.IdeaService])
], IdeaController);
exports.IdeaController = IdeaController;
//# sourceMappingURL=idea.controller.js.map
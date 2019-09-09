"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const items_module_1 = require("./items/items.module");
const typeorm_1 = require("@nestjs/typeorm");
const idea_module_1 = require("./idea/idea.module");
const core_1 = require("@nestjs/core");
const http_error_filter_1 = require("./shared/http-error.filter");
const logging_interceptor_1 = require("./shared/logging.interceptor");
const validation_pipe_1 = require("./shared/validation.pipe");
const user_module_1 = require("./user/user.module");
const comment_module_1 = require("./comment/comment.module");
const dictionary_module_1 = require("./dictionaries/dictionary.module");
const box_module_1 = require("./box/box.module");
const psrobject_module_1 = require("./psrobject/psrobject.module");
const file_module_1 = require("./file/file.module");
const tag_module_1 = require("./tag/tag.module");
const type_module_1 = require("./type/type.module");
const search_module_1 = require("./search/search.module");
const graphql_1 = require("@nestjs/graphql");
const typeorm_config_1 = require("../typeorm.config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            items_module_1.ItemsModule,
            idea_module_1.IdeaModule,
            user_module_1.UserModule,
            comment_module_1.CommentModule,
            dictionary_module_1.DictionaryModule,
            box_module_1.BoxModule,
            psrobject_module_1.PsrobjectModule,
            file_module_1.FileModule,
            tag_module_1.TagModule,
            type_module_1.TypeModule,
            search_module_1.SearchModule,
            graphql_1.GraphQLModule.forRoot({
                installSubscriptionHandlers: true,
                typePaths: ['./**/*.graphql'],
                context: ({ req }) => ({ req }),
            }),
        ],
        controllers: [],
        providers: [
            { provide: core_1.APP_FILTER, useClass: http_error_filter_1.HttpErrorFilter },
            { provide: core_1.APP_INTERCEPTOR, useClass: logging_interceptor_1.LoggingInterceptor },
            { provide: core_1.APP_PIPE, useClass: validation_pipe_1.ValidationPipe },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
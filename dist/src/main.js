"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("./shared/validation.pipe");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const config = require("config");
const serverConfig = config.get('server');
const port = process.env.PORT || serverConfig.port;
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const logger = new common_1.Logger('bootstrap');
        const server = yield core_1.NestFactory.create(app_module_1.AppModule, {
            bodyParser: true,
        });
        if (process.env.NODE_ENV === 'development') {
            server.enableCors();
        }
        else {
            logger.log(`Accepting requests from origin "${serverConfig.origin}" `);
            server.enableCors({
                origin: serverConfig.origin,
            });
        }
        server.useGlobalPipes(new validation_pipe_1.ValidationPipe());
        const options = new swagger_1.DocumentBuilder()
            .setTitle('Cats example')
            .setDescription('The cats API description')
            .setVersion('1.0')
            .addTag('cats')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(server, options);
        swagger_1.SwaggerModule.setup('api', server, document);
        yield server.listen(port);
        logger.log('Run on port:' + port);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map
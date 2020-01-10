"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
/**
 * Represents the inteceptor, which sets the URL attributes of the _links
 * object of the ImageListItemDtos
 */
let ImageListItemInterceptor = class ImageListItemInterceptor {
    /**
     * Intercepts the response of, by updating the _links object with
     * the appropiate urls.
     * @param req The express request object
     * @param call$ The response stream
     */
    intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        // Get url e.g. http://localhost:3000/api/v1/image
        // without any GET-Parameters (?remoteId=1)
        const url = `${req.protocol}://${req.get('host')}${req._parsedUrl.pathname}`;
        // Returns the response stream and maps the data
        return next.handle().pipe(operators_1.map(response => {
            // Updates each image _links object
            response.results.forEach((image) => image._links = {
                // Set the detail url
                detail: `${url}/${image.fingerprint}`
            });
            return response;
        }));
    }
};
ImageListItemInterceptor = __decorate([
    common_1.Injectable()
], ImageListItemInterceptor);
exports.ImageListItemInterceptor = ImageListItemInterceptor;
//# sourceMappingURL=image-list-item.interceptor.js.map
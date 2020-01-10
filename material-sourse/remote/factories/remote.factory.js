"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const common_1 = require("@lxdhub/common");
const common_2 = require("@nestjs/common");
/**
 * Factory which produces RemoteDtos
 */
let RemoteFactory = class RemoteFactory extends common_1.Factory {
    /**
     * Maps the given database remote with the RemoteDtos and returns
     * the instances
     * @param remote The database remote, which should be mapped with a RemoteDto
     */
    entityToDto(remote) {
        const remoteDto = new __1.RemoteDto();
        remoteDto.name = remote.name;
        remoteDto.protocol = remote.protocol;
        remoteDto.public = remote.public;
        remoteDto.readonly = remote.readonly;
        remoteDto.serverUrl = remote.serverUrl;
        remoteDto.id = remote.id;
        return remoteDto;
    }
    /**
     * Maps the given database remotes with the RemoteDtos and returns
     * the instances as array
     * @param remotes The database remotes, which should be mapped with ImageListItemDtos
     */
    entitiesToDto(remotes) {
        return remotes.map(remote => this.entityToDto(remote));
    }
};
RemoteFactory = __decorate([
    common_2.Injectable()
], RemoteFactory);
exports.RemoteFactory = RemoteFactory;
//# sourceMappingURL=remote.factory.js.map
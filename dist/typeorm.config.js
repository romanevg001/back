"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const dbConfig = config.get('db');
exports.typeOrmConfig = {
    type: dbConfig.type,
    host: process.env.RDS_HOSTNAME || dbConfig.host,
    port: process.env.RDS_PORT || dbConfig.port,
    username: process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.RDS_DB_NAME || dbConfig.database,
    synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
    logging: true,
    entities: ['./src/**/*.entity{.ts,.js}', './dist/**/*.entity.js'],
};
console.log('typeOrmConfig = ', exports.typeOrmConfig);
//# sourceMappingURL=typeorm.config.js.map
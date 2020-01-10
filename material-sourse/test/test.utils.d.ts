import { DatabaseService } from '@lxdhub/db';
/**
 * This class is used to support database
 * tests with unit tests in NestJS.
 *
 * This class is inspired by https://github.com/jgordor
 * https://github.com/nestjs/nest/issues/409#issuecomment-364639051
 */
export declare class TestUtils {
    databaseService: DatabaseService;
    order: string[];
    /**
     * Creates an instance of TestUtils
     */
    constructor(databaseService: DatabaseService);
    /**
     * Shutdown the http server
     * and close database connections
     */
    shutdownServer(server: any): Promise<void>;
    /**
     * Closes the database connections
     */
    closeDbConnection(): Promise<void>;
    /**
     * Returns the order id
     * @param entityName The entity name of which you want to have the order from
     */
    getOrder(entityName: any): number;
    /**
     * Returns the entites of the database
     */
    getEntities(): Promise<any[]>;
    /**
     * Cleans the database and reloads the entries
     */
    reloadFixtures(): Promise<void>;
    /**
     * Cleans all the entities
     */
    cleanAll(entities: any): Promise<void>;
    /**
     * Insert the data from the src/test/fixtures folder
     */
    loadAll(entities: any[]): Promise<void>;
}

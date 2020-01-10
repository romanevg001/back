/**
 * The response wrapper around the requested
 * data, which will be used as response,
 * when requesting a paginated list.
 */
export declare class ResponseDto<ItemType> {
    /**
     * Creates a new instance of a response.
     * @param results The results of the query
     */
    constructor(results: ItemType);
    /**
     * The requested data
     */
    readonly results: ItemType;
}

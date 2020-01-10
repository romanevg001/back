/**
 * This interface represents
 * options for iterating through
 * paginated lists.
 */
export declare class PaginationOptionsDto {
    /**
     * The maximum amount of items to request.
     */
    readonly limit: number;
    /**
     * The offset of the items
     */
    readonly offset: number;
}

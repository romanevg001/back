"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The response wrapper around the requested
 * data, which will be used as response,
 * when requesting a paginated list.
 */
class PaginationResponseDto {
    /**
     * Creates a new instance of a pagination response.
     * @param results The results of the query
     * @param total The total amount of items, without the applied pagination options
     * @param paginationOptions The given pagination options
     */
    constructor(results, total, paginationOptions) {
        this.offset = paginationOptions.offset;
        this.results = results;
        this.total = total;
        this.limit = paginationOptions.limit;
    }
}
exports.PaginationResponseDto = PaginationResponseDto;
//# sourceMappingURL=pagination-response.dto.js.map
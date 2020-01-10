"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let SearchService = 
/**
 * The search services provides methods,
 * which are search-related
 */
class SearchService {
    constructor() {
        this.regex = new RegExp('(.*)=(.*)');
    }
    /**
     * Returns the literal-key if the given queryKey is found in the alias list
     * of the dictionary
     * @param queryKey The key of the search-query-string
     * @param dictionaries The dictionaries to translate the aliases to the literal
     *
     * @example
     * dictionaries = [ { aliases: [ 'arch' ], searchLiteralKey: 'architecture' }];
     * getLiteralKey('arch', dictionaries) // returns 'architecture'
     */
    getLiteralKey(queryKey, dictionaries) {
        const dictionary = dictionaries
            .map(dict => 
        // Find dictionary, which any aliases is equal to
        // to the given queryKey of the dictionary
        dict.aliases.filter(alias => alias === queryKey).length ? dict : null)
            .find(dict => dict !== null);
        // Return its literal-key if found one, otherwise return null
        return dictionary ? dictionary.searchLiteralKey : null;
    }
    /**
     * Check if is advanced search
     * @param query The search query
     * @example
     * isAdvancedSearch('os=ubuntu') // true
     * isAdvancedSearch('ubuntu') // false
     */
    isAdvancedSearch(query) {
        return this.regex.test(query);
    }
    /**
     * Transforms the query key-value-string into an object
     * @param queryObject The query object with the key, value seperated by a "="
     * @example
     * getKeyValue('os=ubuntu') // { os: 'ubuntu' }
     */
    getKeyValue(queryObject) {
        const match = this.regex.exec(queryObject);
        return {
            key: match[1],
            value: match[2]
        };
    }
    /**
     * Returns a literal from an advanced search-query-string
     * @param query The advanced query string
     * @param dictionaries The dictionaries to translate the aliases to the literal
     *
     * @example
     * const dictionaries = [
     *  { aliases: [ 'os' ], searchLiteralKey: 'os' },
     *  { aliases: [ 'arch' ], searchLiteralKey: 'architecture' }
     * ];
     * getLiteralFromAdvancedQuery('os=ubuntu arch=amd64', dictionaries)
     * // returns { architecture: 'amd64', os: 'ubuntu'}
     */
    getLiteralFromAdvancedQuery(query, dictionaries) {
        const search = {};
        query
            .split(' ')
            // Transform the query-split into and object
            .map(queryAttr => this.getKeyValue(queryAttr))
            .forEach(queryAttr => {
            // For each key-value pair, get the searchLiteralKey
            // from the dictionaries
            const key = this.getLiteralKey(queryAttr.key, dictionaries);
            if (key) {
                search[key] = queryAttr.value;
            }
            else {
                throw new TypeError('Given key is not valid');
            }
        });
        return search;
    }
    /**
     * Maps the query string key, values to the search literal
     * using the given dictionaries.
     * Returns null, if the
     * @param query The query string which you want to have the literal from
     * @param dictionaries The dictionaries to translate the aliases to the literal
     * @param defaultKey Optional key, which should be mapped if the query-string is not key=value
     */
    getLiteral(query, dictionaries, defaultKey) {
        // Make sure everything is lowercase
        query = query.toLocaleLowerCase();
        try {
            if (this.isAdvancedSearch(query)) {
                // Generate literal
                return this.getLiteralFromAdvancedQuery(query, dictionaries);
            }
            else if (defaultKey) {
                // Return literal with the given default-key
                return { [defaultKey]: query };
            }
        }
        catch (err) {
            // Throw error if there is an error
            throw new TypeError('Could not parse the search string');
        }
        // If is not advanced search and does not have
        // set a defaultkey, return empty object
        return {};
    }
};
SearchService = __decorate([
    common_1.Injectable()
    /**
     * The search services provides methods,
     * which are search-related
     */
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map
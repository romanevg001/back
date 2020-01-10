import { SearchLiteral } from '.';
import { SearchDictionary } from './interfaces';
export declare class SearchService {
    private regex;
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
    private getLiteralKey;
    /**
     * Check if is advanced search
     * @param query The search query
     * @example
     * isAdvancedSearch('os=ubuntu') // true
     * isAdvancedSearch('ubuntu') // false
     */
    private isAdvancedSearch;
    /**
     * Transforms the query key-value-string into an object
     * @param queryObject The query object with the key, value seperated by a "="
     * @example
     * getKeyValue('os=ubuntu') // { os: 'ubuntu' }
     */
    private getKeyValue;
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
    private getLiteralFromAdvancedQuery;
    /**
     * Maps the query string key, values to the search literal
     * using the given dictionaries.
     * Returns null, if the
     * @param query The query string which you want to have the literal from
     * @param dictionaries The dictionaries to translate the aliases to the literal
     * @param defaultKey Optional key, which should be mapped if the query-string is not key=value
     */
    getLiteral(query: string, dictionaries: SearchDictionary[], defaultKey?: string): SearchLiteral;
}

import { SearchDictionary } from '../search';
/**
 * A dictionar<, which will be used to translate
 * a query string into a SearchLiteral.
 */
export declare const ImageSearchDictionary: SearchDictionary[];
/**
 * The provider for the ImageSearchDictonary-constant
 */
export declare const ImageSearchDictionaryProvider: {
    provide: string;
    useFactory: () => SearchDictionary[];
};

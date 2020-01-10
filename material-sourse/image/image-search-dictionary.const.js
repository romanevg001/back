"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A dictionar<, which will be used to translate
 * a query string into a SearchLiteral.
 */
exports.ImageSearchDictionary = [
    {
        aliases: [
            'os',
            'operatingsystem',
            'dist',
            'distribution'
        ],
        searchLiteralKey: 'distribution'
    },
    {
        aliases: [
            'arch',
            'architecture'
        ],
        searchLiteralKey: 'arch'
    },
    {
        aliases: [
            'fingerprint',
            'fing'
        ],
        searchLiteralKey: 'fingerprint'
    },
    {
        aliases: [
            'description',
            'desc'
        ],
        searchLiteralKey: 'desc'
    },
    {
        aliases: [
            'version',
            'vers'
        ],
        searchLiteralKey: 'version'
    },
    {
        aliases: [
            'rel',
            'release'
        ],
        searchLiteralKey: 'release'
    }
];
/**
 * The provider for the ImageSearchDictonary-constant
 */
exports.ImageSearchDictionaryProvider = {
    provide: 'ImageSearchDictionary',
    useFactory: () => exports.ImageSearchDictionary,
};
//# sourceMappingURL=image-search-dictionary.const.js.map
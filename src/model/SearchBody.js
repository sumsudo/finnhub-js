/**
 * Finnhub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SearchBody model module.
 * @module model/SearchBody
 * @version 1.2.18
 */
class SearchBody {
    /**
     * Constructs a new <code>SearchBody</code>.
     * @alias module:model/SearchBody
     * @param query {String} Search query
     */
    constructor(query) { 
        
        SearchBody.initialize(this, query);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, query) { 
        obj['query'] = query;
    }

    /**
     * Constructs a <code>SearchBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchBody} obj Optional instance to populate.
     * @return {module:model/SearchBody} The populated <code>SearchBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchBody();

            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('isins')) {
                obj['isins'] = ApiClient.convertToType(data['isins'], 'String');
            }
            if (data.hasOwnProperty('cusips')) {
                obj['cusips'] = ApiClient.convertToType(data['cusips'], 'String');
            }
            if (data.hasOwnProperty('ciks')) {
                obj['ciks'] = ApiClient.convertToType(data['ciks'], 'String');
            }
            if (data.hasOwnProperty('sedarIds')) {
                obj['sedarIds'] = ApiClient.convertToType(data['sedarIds'], 'String');
            }
            if (data.hasOwnProperty('chIds')) {
                obj['chIds'] = ApiClient.convertToType(data['chIds'], 'String');
            }
            if (data.hasOwnProperty('symbols')) {
                obj['symbols'] = ApiClient.convertToType(data['symbols'], 'String');
            }
            if (data.hasOwnProperty('sedols')) {
                obj['sedols'] = ApiClient.convertToType(data['sedols'], 'String');
            }
            if (data.hasOwnProperty('sources')) {
                obj['sources'] = ApiClient.convertToType(data['sources'], 'String');
            }
            if (data.hasOwnProperty('forms')) {
                obj['forms'] = ApiClient.convertToType(data['forms'], 'String');
            }
            if (data.hasOwnProperty('gics')) {
                obj['gics'] = ApiClient.convertToType(data['gics'], 'String');
            }
            if (data.hasOwnProperty('naics')) {
                obj['naics'] = ApiClient.convertToType(data['naics'], 'String');
            }
            if (data.hasOwnProperty('exhibits')) {
                obj['exhibits'] = ApiClient.convertToType(data['exhibits'], 'String');
            }
            if (data.hasOwnProperty('exchanges')) {
                obj['exchanges'] = ApiClient.convertToType(data['exchanges'], 'String');
            }
            if (data.hasOwnProperty('countries')) {
                obj['countries'] = ApiClient.convertToType(data['countries'], 'String');
            }
            if (data.hasOwnProperty('acts')) {
                obj['acts'] = ApiClient.convertToType(data['acts'], 'String');
            }
            if (data.hasOwnProperty('caps')) {
                obj['caps'] = ApiClient.convertToType(data['caps'], 'String');
            }
            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'String');
            }
            if (data.hasOwnProperty('toDate')) {
                obj['toDate'] = ApiClient.convertToType(data['toDate'], 'String');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'String');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
            if (data.hasOwnProperty('highlighted')) {
                obj['highlighted'] = ApiClient.convertToType(data['highlighted'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Search query
 * @member {String} query
 */
SearchBody.prototype['query'] = undefined;

/**
 * List of isin to search, comma separated (Max: 50).
 * @member {String} isins
 */
SearchBody.prototype['isins'] = undefined;

/**
 * List of cusip to search, comma separated (Max: 50).
 * @member {String} cusips
 */
SearchBody.prototype['cusips'] = undefined;

/**
 * List of SEC Center Index Key to search, comma separated (Max: 50).
 * @member {String} ciks
 */
SearchBody.prototype['ciks'] = undefined;

/**
 * List of SEDAR issuer number to search, comma separated (Max: 50).
 * @member {String} sedarIds
 */
SearchBody.prototype['sedarIds'] = undefined;

/**
 * List of Companies House number to search, comma separated (Max: 50).
 * @member {String} chIds
 */
SearchBody.prototype['chIds'] = undefined;

/**
 * List of symbols to search, comma separated (Max: 50).
 * @member {String} symbols
 */
SearchBody.prototype['symbols'] = undefined;

/**
 * List of sedols to search, comma separated (Max: 50).
 * @member {String} sedols
 */
SearchBody.prototype['sedols'] = undefined;

/**
 * List of sources to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} sources
 */
SearchBody.prototype['sources'] = undefined;

/**
 * List of forms to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} forms
 */
SearchBody.prototype['forms'] = undefined;

/**
 * List of gics to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} gics
 */
SearchBody.prototype['gics'] = undefined;

/**
 * List of sources to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} naics
 */
SearchBody.prototype['naics'] = undefined;

/**
 * List of exhibits to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} exhibits
 */
SearchBody.prototype['exhibits'] = undefined;

/**
 * List of exchanges to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} exchanges
 */
SearchBody.prototype['exchanges'] = undefined;

/**
 * List of sources to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} countries
 */
SearchBody.prototype['countries'] = undefined;

/**
 * List of SEC's exchanges act to search, comma separated. Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} acts
 */
SearchBody.prototype['acts'] = undefined;

/**
 * List of market capitalization to search, comma separated. Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} caps
 */
SearchBody.prototype['caps'] = undefined;

/**
 * Search from date in format: YYYY-MM-DD, default from the last 2 years
 * @member {String} fromDate
 */
SearchBody.prototype['fromDate'] = undefined;

/**
 * Search to date in format: YYYY-MM-DD, default to today
 * @member {String} toDate
 */
SearchBody.prototype['toDate'] = undefined;

/**
 * Use for pagination, default to page 1
 * @member {String} page
 */
SearchBody.prototype['page'] = undefined;

/**
 * Sort result by, default: sortMostRecent. Look at <code>/filter</code> endpoint to see all available values.
 * @member {String} sort
 */
SearchBody.prototype['sort'] = undefined;

/**
 * Enable highlight in returned filings. If enabled, only return 10 results each time
 * @member {Boolean} highlighted
 */
SearchBody.prototype['highlighted'] = undefined;






export default SearchBody;


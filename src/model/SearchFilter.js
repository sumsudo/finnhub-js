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
 * The SearchFilter model module.
 * @module model/SearchFilter
 * @version 1.2.19
 */
class SearchFilter {
    /**
     * Constructs a new <code>SearchFilter</code>.
     * @alias module:model/SearchFilter
     */
    constructor() { 
        
        SearchFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchFilter} obj Optional instance to populate.
     * @return {module:model/SearchFilter} The populated <code>SearchFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchFilter();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Filter id, use with respective field in search query body.
 * @member {String} id
 */
SearchFilter.prototype['id'] = undefined;

/**
 * Display name.
 * @member {String} name
 */
SearchFilter.prototype['name'] = undefined;






export default SearchFilter;


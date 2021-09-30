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
import SymbolLookupInfo from './SymbolLookupInfo';

/**
 * The SymbolLookup model module.
 * @module model/SymbolLookup
 * @version 1.2.7
 */
class SymbolLookup {
    /**
     * Constructs a new <code>SymbolLookup</code>.
     * @alias module:model/SymbolLookup
     */
    constructor() { 
        
        SymbolLookup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SymbolLookup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SymbolLookup} obj Optional instance to populate.
     * @return {module:model/SymbolLookup} The populated <code>SymbolLookup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SymbolLookup();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], [SymbolLookupInfo]);
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Array of search results.
 * @member {Array.<module:model/SymbolLookupInfo>} result
 */
SymbolLookup.prototype['result'] = undefined;

/**
 * Number of results.
 * @member {Number} count
 */
SymbolLookup.prototype['count'] = undefined;






export default SymbolLookup;


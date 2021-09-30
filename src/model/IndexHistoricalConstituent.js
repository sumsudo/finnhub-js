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
 * The IndexHistoricalConstituent model module.
 * @module model/IndexHistoricalConstituent
 * @version 1.2.7
 */
class IndexHistoricalConstituent {
    /**
     * Constructs a new <code>IndexHistoricalConstituent</code>.
     * @alias module:model/IndexHistoricalConstituent
     */
    constructor() { 
        
        IndexHistoricalConstituent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IndexHistoricalConstituent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndexHistoricalConstituent} obj Optional instance to populate.
     * @return {module:model/IndexHistoricalConstituent} The populated <code>IndexHistoricalConstituent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IndexHistoricalConstituent();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Symbol
 * @member {String} symbol
 */
IndexHistoricalConstituent.prototype['symbol'] = undefined;

/**
 * <code>add</code> or <code>remove</code>.
 * @member {String} action
 */
IndexHistoricalConstituent.prototype['action'] = undefined;

/**
 * Date of joining or leaving the index.
 * @member {Date} date
 */
IndexHistoricalConstituent.prototype['date'] = undefined;






export default IndexHistoricalConstituent;


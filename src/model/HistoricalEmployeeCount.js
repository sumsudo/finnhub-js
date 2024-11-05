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
import EmployeeCount from './EmployeeCount';

/**
 * The HistoricalEmployeeCount model module.
 * @module model/HistoricalEmployeeCount
 * @version 1.2.19
 */
class HistoricalEmployeeCount {
    /**
     * Constructs a new <code>HistoricalEmployeeCount</code>.
     * @alias module:model/HistoricalEmployeeCount
     */
    constructor() { 
        
        HistoricalEmployeeCount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalEmployeeCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalEmployeeCount} obj Optional instance to populate.
     * @return {module:model/HistoricalEmployeeCount} The populated <code>HistoricalEmployeeCount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalEmployeeCount();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [EmployeeCount]);
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Array of market data.
 * @member {Array.<module:model/EmployeeCount>} data
 */
HistoricalEmployeeCount.prototype['data'] = undefined;

/**
 * Symbol
 * @member {String} symbol
 */
HistoricalEmployeeCount.prototype['symbol'] = undefined;






export default HistoricalEmployeeCount;


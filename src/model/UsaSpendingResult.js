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
import UsaSpending from './UsaSpending';

/**
 * The UsaSpendingResult model module.
 * @module model/UsaSpendingResult
 * @version 1.2.16
 */
class UsaSpendingResult {
    /**
     * Constructs a new <code>UsaSpendingResult</code>.
     * @alias module:model/UsaSpendingResult
     */
    constructor() { 
        
        UsaSpendingResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UsaSpendingResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsaSpendingResult} obj Optional instance to populate.
     * @return {module:model/UsaSpendingResult} The populated <code>UsaSpendingResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsaSpendingResult();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [UsaSpending]);
            }
        }
        return obj;
    }


}

/**
 * Symbol.
 * @member {String} symbol
 */
UsaSpendingResult.prototype['symbol'] = undefined;

/**
 * Array of government's spending data points.
 * @member {Array.<module:model/UsaSpending>} data
 */
UsaSpendingResult.prototype['data'] = undefined;






export default UsaSpendingResult;


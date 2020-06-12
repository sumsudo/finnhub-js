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
 * The FinancialStatements model module.
 * @module model/FinancialStatements
 * @version 1.1.3
 */
class FinancialStatements {
    /**
     * Constructs a new <code>FinancialStatements</code>.
     * @alias module:model/FinancialStatements
     */
    constructor() { 
        
        FinancialStatements.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FinancialStatements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FinancialStatements} obj Optional instance to populate.
     * @return {module:model/FinancialStatements} The populated <code>FinancialStatements</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FinancialStatements();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('financials')) {
                obj['financials'] = ApiClient.convertToType(data['financials'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Symbol of the company.
 * @member {String} symbol
 */
FinancialStatements.prototype['symbol'] = undefined;

/**
 * An array of map of key, value pairs containing the data for each period.
 * @member {Array.<Object>} financials
 */
FinancialStatements.prototype['financials'] = undefined;






export default FinancialStatements;


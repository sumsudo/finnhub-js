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
import ETFHoldingsData from './ETFHoldingsData';

/**
 * The ETFsHoldings model module.
 * @module model/ETFsHoldings
 * @version 1.2.14
 */
class ETFsHoldings {
    /**
     * Constructs a new <code>ETFsHoldings</code>.
     * @alias module:model/ETFsHoldings
     */
    constructor() { 
        
        ETFsHoldings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ETFsHoldings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFsHoldings} obj Optional instance to populate.
     * @return {module:model/ETFsHoldings} The populated <code>ETFsHoldings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ETFsHoldings();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('atDate')) {
                obj['atDate'] = ApiClient.convertToType(data['atDate'], 'Date');
            }
            if (data.hasOwnProperty('numberOfHoldings')) {
                obj['numberOfHoldings'] = ApiClient.convertToType(data['numberOfHoldings'], 'Number');
            }
            if (data.hasOwnProperty('holdings')) {
                obj['holdings'] = ApiClient.convertToType(data['holdings'], [ETFHoldingsData]);
            }
        }
        return obj;
    }


}

/**
 * ETF symbol.
 * @member {String} symbol
 */
ETFsHoldings.prototype['symbol'] = undefined;

/**
 * Holdings update date.
 * @member {Date} atDate
 */
ETFsHoldings.prototype['atDate'] = undefined;

/**
 * Number of holdings.
 * @member {Number} numberOfHoldings
 */
ETFsHoldings.prototype['numberOfHoldings'] = undefined;

/**
 * Array of holdings.
 * @member {Array.<module:model/ETFHoldingsData>} holdings
 */
ETFsHoldings.prototype['holdings'] = undefined;






export default ETFsHoldings;


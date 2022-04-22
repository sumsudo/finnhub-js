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
import MutualFundHoldingsData from './MutualFundHoldingsData';

/**
 * The MutualFundHoldings model module.
 * @module model/MutualFundHoldings
 * @version 1.2.14
 */
class MutualFundHoldings {
    /**
     * Constructs a new <code>MutualFundHoldings</code>.
     * @alias module:model/MutualFundHoldings
     */
    constructor() { 
        
        MutualFundHoldings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MutualFundHoldings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundHoldings} obj Optional instance to populate.
     * @return {module:model/MutualFundHoldings} The populated <code>MutualFundHoldings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MutualFundHoldings();

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
                obj['holdings'] = ApiClient.convertToType(data['holdings'], [MutualFundHoldingsData]);
            }
        }
        return obj;
    }


}

/**
 * Symbol.
 * @member {String} symbol
 */
MutualFundHoldings.prototype['symbol'] = undefined;

/**
 * Holdings update date.
 * @member {Date} atDate
 */
MutualFundHoldings.prototype['atDate'] = undefined;

/**
 * Number of holdings.
 * @member {Number} numberOfHoldings
 */
MutualFundHoldings.prototype['numberOfHoldings'] = undefined;

/**
 * Array of holdings.
 * @member {Array.<module:model/MutualFundHoldingsData>} holdings
 */
MutualFundHoldings.prototype['holdings'] = undefined;






export default MutualFundHoldings;


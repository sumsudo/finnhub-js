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
 * The ETFHoldingsData model module.
 * @module model/ETFHoldingsData
 * @version 1.2.14
 */
class ETFHoldingsData {
    /**
     * Constructs a new <code>ETFHoldingsData</code>.
     * @alias module:model/ETFHoldingsData
     */
    constructor() { 
        
        ETFHoldingsData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ETFHoldingsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFHoldingsData} obj Optional instance to populate.
     * @return {module:model/ETFHoldingsData} The populated <code>ETFHoldingsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ETFHoldingsData();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('isin')) {
                obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
            }
            if (data.hasOwnProperty('cusip')) {
                obj['cusip'] = ApiClient.convertToType(data['cusip'], 'String');
            }
            if (data.hasOwnProperty('share')) {
                obj['share'] = ApiClient.convertToType(data['share'], 'Number');
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Symbol description
 * @member {String} symbol
 */
ETFHoldingsData.prototype['symbol'] = undefined;

/**
 * Security name
 * @member {String} name
 */
ETFHoldingsData.prototype['name'] = undefined;

/**
 * ISIN.
 * @member {String} isin
 */
ETFHoldingsData.prototype['isin'] = undefined;

/**
 * CUSIP.
 * @member {String} cusip
 */
ETFHoldingsData.prototype['cusip'] = undefined;

/**
 * Number of shares owned by the ETF.
 * @member {Number} share
 */
ETFHoldingsData.prototype['share'] = undefined;

/**
 * Portfolio's percent
 * @member {Number} percent
 */
ETFHoldingsData.prototype['percent'] = undefined;

/**
 * Market value
 * @member {Number} value
 */
ETFHoldingsData.prototype['value'] = undefined;






export default ETFHoldingsData;


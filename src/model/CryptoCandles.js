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
 * The CryptoCandles model module.
 * @module model/CryptoCandles
 * @version 1.2.19
 */
class CryptoCandles {
    /**
     * Constructs a new <code>CryptoCandles</code>.
     * @alias module:model/CryptoCandles
     */
    constructor() { 
        
        CryptoCandles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CryptoCandles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CryptoCandles} obj Optional instance to populate.
     * @return {module:model/CryptoCandles} The populated <code>CryptoCandles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CryptoCandles();

            if (data.hasOwnProperty('o')) {
                obj['o'] = ApiClient.convertToType(data['o'], ['Number']);
            }
            if (data.hasOwnProperty('h')) {
                obj['h'] = ApiClient.convertToType(data['h'], ['Number']);
            }
            if (data.hasOwnProperty('l')) {
                obj['l'] = ApiClient.convertToType(data['l'], ['Number']);
            }
            if (data.hasOwnProperty('c')) {
                obj['c'] = ApiClient.convertToType(data['c'], ['Number']);
            }
            if (data.hasOwnProperty('v')) {
                obj['v'] = ApiClient.convertToType(data['v'], ['Number']);
            }
            if (data.hasOwnProperty('t')) {
                obj['t'] = ApiClient.convertToType(data['t'], ['Number']);
            }
            if (data.hasOwnProperty('s')) {
                obj['s'] = ApiClient.convertToType(data['s'], 'String');
            }
        }
        return obj;
    }


}

/**
 * List of open prices for returned candles.
 * @member {Array.<Number>} o
 */
CryptoCandles.prototype['o'] = undefined;

/**
 * List of high prices for returned candles.
 * @member {Array.<Number>} h
 */
CryptoCandles.prototype['h'] = undefined;

/**
 * List of low prices for returned candles.
 * @member {Array.<Number>} l
 */
CryptoCandles.prototype['l'] = undefined;

/**
 * List of close prices for returned candles.
 * @member {Array.<Number>} c
 */
CryptoCandles.prototype['c'] = undefined;

/**
 * List of volume data for returned candles.
 * @member {Array.<Number>} v
 */
CryptoCandles.prototype['v'] = undefined;

/**
 * List of timestamp for returned candles.
 * @member {Array.<Number>} t
 */
CryptoCandles.prototype['t'] = undefined;

/**
 * Status of the response. This field can either be ok or no_data.
 * @member {String} s
 */
CryptoCandles.prototype['s'] = undefined;






export default CryptoCandles;


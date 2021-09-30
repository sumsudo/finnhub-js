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
 * The CryptoSymbol model module.
 * @module model/CryptoSymbol
 * @version 1.2.7
 */
class CryptoSymbol {
    /**
     * Constructs a new <code>CryptoSymbol</code>.
     * @alias module:model/CryptoSymbol
     */
    constructor() { 
        
        CryptoSymbol.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CryptoSymbol</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CryptoSymbol} obj Optional instance to populate.
     * @return {module:model/CryptoSymbol} The populated <code>CryptoSymbol</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CryptoSymbol();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('displaySymbol')) {
                obj['displaySymbol'] = ApiClient.convertToType(data['displaySymbol'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Symbol description
 * @member {String} description
 */
CryptoSymbol.prototype['description'] = undefined;

/**
 * Display symbol name.
 * @member {String} displaySymbol
 */
CryptoSymbol.prototype['displaySymbol'] = undefined;

/**
 * Unique symbol used to identify this symbol used in <code>/crypto/candle</code> endpoint.
 * @member {String} symbol
 */
CryptoSymbol.prototype['symbol'] = undefined;






export default CryptoSymbol;


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
 * The ForexSymbol model module.
 * @module model/ForexSymbol
 * @version 1.2.7
 */
class ForexSymbol {
    /**
     * Constructs a new <code>ForexSymbol</code>.
     * @alias module:model/ForexSymbol
     */
    constructor() { 
        
        ForexSymbol.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ForexSymbol</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ForexSymbol} obj Optional instance to populate.
     * @return {module:model/ForexSymbol} The populated <code>ForexSymbol</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ForexSymbol();

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
ForexSymbol.prototype['description'] = undefined;

/**
 * Display symbol name.
 * @member {String} displaySymbol
 */
ForexSymbol.prototype['displaySymbol'] = undefined;

/**
 * Unique symbol used to identify this symbol used in <code>/forex/candle</code> endpoint.
 * @member {String} symbol
 */
ForexSymbol.prototype['symbol'] = undefined;






export default ForexSymbol;


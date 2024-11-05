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
import Development from './Development';

/**
 * The PressRelease model module.
 * @module model/PressRelease
 * @version 1.2.19
 */
class PressRelease {
    /**
     * Constructs a new <code>PressRelease</code>.
     * @alias module:model/PressRelease
     */
    constructor() { 
        
        PressRelease.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PressRelease</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PressRelease} obj Optional instance to populate.
     * @return {module:model/PressRelease} The populated <code>PressRelease</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PressRelease();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('majorDevelopment')) {
                obj['majorDevelopment'] = ApiClient.convertToType(data['majorDevelopment'], [Development]);
            }
        }
        return obj;
    }


}

/**
 * Company symbol.
 * @member {String} symbol
 */
PressRelease.prototype['symbol'] = undefined;

/**
 * Array of major developments.
 * @member {Array.<module:model/Development>} majorDevelopment
 */
PressRelease.prototype['majorDevelopment'] = undefined;






export default PressRelease;


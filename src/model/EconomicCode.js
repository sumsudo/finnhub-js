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
 * The EconomicCode model module.
 * @module model/EconomicCode
 * @version 1.1.6
 */
class EconomicCode {
    /**
     * Constructs a new <code>EconomicCode</code>.
     * @alias module:model/EconomicCode
     */
    constructor() { 
        
        EconomicCode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EconomicCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EconomicCode} obj Optional instance to populate.
     * @return {module:model/EconomicCode} The populated <code>EconomicCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EconomicCode();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Finnhub economic code used to get historical data
 * @member {String} code
 */
EconomicCode.prototype['code'] = undefined;

/**
 * Country
 * @member {String} country
 */
EconomicCode.prototype['country'] = undefined;

/**
 * Indicator name
 * @member {String} name
 */
EconomicCode.prototype['name'] = undefined;

/**
 * Unit
 * @member {String} unit
 */
EconomicCode.prototype['unit'] = undefined;






export default EconomicCode;


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
 * The MutualFundEet model module.
 * @module model/MutualFundEet
 * @version 1.2.19
 */
class MutualFundEet {
    /**
     * Constructs a new <code>MutualFundEet</code>.
     * @alias module:model/MutualFundEet
     */
    constructor() { 
        
        MutualFundEet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MutualFundEet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundEet} obj Optional instance to populate.
     * @return {module:model/MutualFundEet} The populated <code>MutualFundEet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MutualFundEet();

            if (data.hasOwnProperty('isin')) {
                obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
        }
        return obj;
    }


}

/**
 * ISIN.
 * @member {String} isin
 */
MutualFundEet.prototype['isin'] = undefined;

/**
 * @member {Object} data
 */
MutualFundEet.prototype['data'] = undefined;






export default MutualFundEet;


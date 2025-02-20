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
import MutualFundCountryExposureData from './MutualFundCountryExposureData';

/**
 * The MutualFundCountryExposure model module.
 * @module model/MutualFundCountryExposure
 * @version 1.2.19
 */
class MutualFundCountryExposure {
    /**
     * Constructs a new <code>MutualFundCountryExposure</code>.
     * @alias module:model/MutualFundCountryExposure
     */
    constructor() { 
        
        MutualFundCountryExposure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MutualFundCountryExposure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundCountryExposure} obj Optional instance to populate.
     * @return {module:model/MutualFundCountryExposure} The populated <code>MutualFundCountryExposure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MutualFundCountryExposure();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('countryExposure')) {
                obj['countryExposure'] = ApiClient.convertToType(data['countryExposure'], [MutualFundCountryExposureData]);
            }
        }
        return obj;
    }


}

/**
 * Symbol.
 * @member {String} symbol
 */
MutualFundCountryExposure.prototype['symbol'] = undefined;

/**
 * Array of countries and and exposure levels.
 * @member {Array.<module:model/MutualFundCountryExposureData>} countryExposure
 */
MutualFundCountryExposure.prototype['countryExposure'] = undefined;






export default MutualFundCountryExposure;


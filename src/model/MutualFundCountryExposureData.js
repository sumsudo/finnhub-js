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
 * The MutualFundCountryExposureData model module.
 * @module model/MutualFundCountryExposureData
 * @version 1.2.16
 */
class MutualFundCountryExposureData {
    /**
     * Constructs a new <code>MutualFundCountryExposureData</code>.
     * @alias module:model/MutualFundCountryExposureData
     */
    constructor() { 
        
        MutualFundCountryExposureData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MutualFundCountryExposureData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundCountryExposureData} obj Optional instance to populate.
     * @return {module:model/MutualFundCountryExposureData} The populated <code>MutualFundCountryExposureData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MutualFundCountryExposureData();

            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('exposure')) {
                obj['exposure'] = ApiClient.convertToType(data['exposure'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Country
 * @member {String} country
 */
MutualFundCountryExposureData.prototype['country'] = undefined;

/**
 * Percent of exposure.
 * @member {Number} exposure
 */
MutualFundCountryExposureData.prototype['exposure'] = undefined;






export default MutualFundCountryExposureData;


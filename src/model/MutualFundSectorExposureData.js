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
 * The MutualFundSectorExposureData model module.
 * @module model/MutualFundSectorExposureData
 * @version 1.2.16
 */
class MutualFundSectorExposureData {
    /**
     * Constructs a new <code>MutualFundSectorExposureData</code>.
     * @alias module:model/MutualFundSectorExposureData
     */
    constructor() { 
        
        MutualFundSectorExposureData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MutualFundSectorExposureData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundSectorExposureData} obj Optional instance to populate.
     * @return {module:model/MutualFundSectorExposureData} The populated <code>MutualFundSectorExposureData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MutualFundSectorExposureData();

            if (data.hasOwnProperty('sector')) {
                obj['sector'] = ApiClient.convertToType(data['sector'], 'String');
            }
            if (data.hasOwnProperty('exposure')) {
                obj['exposure'] = ApiClient.convertToType(data['exposure'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Sector
 * @member {String} sector
 */
MutualFundSectorExposureData.prototype['sector'] = undefined;

/**
 * Percent of exposure.
 * @member {Number} exposure
 */
MutualFundSectorExposureData.prototype['exposure'] = undefined;






export default MutualFundSectorExposureData;


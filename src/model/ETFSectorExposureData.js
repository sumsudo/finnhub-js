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
 * The ETFSectorExposureData model module.
 * @module model/ETFSectorExposureData
 * @version 1.2.16
 */
class ETFSectorExposureData {
    /**
     * Constructs a new <code>ETFSectorExposureData</code>.
     * @alias module:model/ETFSectorExposureData
     */
    constructor() { 
        
        ETFSectorExposureData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ETFSectorExposureData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFSectorExposureData} obj Optional instance to populate.
     * @return {module:model/ETFSectorExposureData} The populated <code>ETFSectorExposureData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ETFSectorExposureData();

            if (data.hasOwnProperty('industry')) {
                obj['industry'] = ApiClient.convertToType(data['industry'], 'String');
            }
            if (data.hasOwnProperty('exposure')) {
                obj['exposure'] = ApiClient.convertToType(data['exposure'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Industry
 * @member {String} industry
 */
ETFSectorExposureData.prototype['industry'] = undefined;

/**
 * Percent of exposure.
 * @member {Number} exposure
 */
ETFSectorExposureData.prototype['exposure'] = undefined;






export default ETFSectorExposureData;


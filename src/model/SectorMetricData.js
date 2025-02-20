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
 * The SectorMetricData model module.
 * @module model/SectorMetricData
 * @version 1.2.19
 */
class SectorMetricData {
    /**
     * Constructs a new <code>SectorMetricData</code>.
     * @alias module:model/SectorMetricData
     */
    constructor() { 
        
        SectorMetricData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SectorMetricData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectorMetricData} obj Optional instance to populate.
     * @return {module:model/SectorMetricData} The populated <code>SectorMetricData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SectorMetricData();

            if (data.hasOwnProperty('sector')) {
                obj['sector'] = ApiClient.convertToType(data['sector'], 'String');
            }
            if (data.hasOwnProperty('metrics')) {
                obj['metrics'] = ApiClient.convertToType(data['metrics'], Object);
            }
        }
        return obj;
    }


}

/**
 * Sector
 * @member {String} sector
 */
SectorMetricData.prototype['sector'] = undefined;

/**
 * Metrics data in key-value format. <code>a</code> and <code>m</code> fields are for average and median respectively.
 * @member {Object} metrics
 */
SectorMetricData.prototype['metrics'] = undefined;






export default SectorMetricData;


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
 * The EbitEstimatesInfo model module.
 * @module model/EbitEstimatesInfo
 * @version 1.2.14
 */
class EbitEstimatesInfo {
    /**
     * Constructs a new <code>EbitEstimatesInfo</code>.
     * @alias module:model/EbitEstimatesInfo
     */
    constructor() { 
        
        EbitEstimatesInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EbitEstimatesInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EbitEstimatesInfo} obj Optional instance to populate.
     * @return {module:model/EbitEstimatesInfo} The populated <code>EbitEstimatesInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EbitEstimatesInfo();

            if (data.hasOwnProperty('ebitAvg')) {
                obj['ebitAvg'] = ApiClient.convertToType(data['ebitAvg'], 'Number');
            }
            if (data.hasOwnProperty('ebitHigh')) {
                obj['ebitHigh'] = ApiClient.convertToType(data['ebitHigh'], 'Number');
            }
            if (data.hasOwnProperty('ebitLow')) {
                obj['ebitLow'] = ApiClient.convertToType(data['ebitLow'], 'Number');
            }
            if (data.hasOwnProperty('numberAnalysts')) {
                obj['numberAnalysts'] = ApiClient.convertToType(data['numberAnalysts'], 'Number');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Average EBIT estimates including Finnhub's proprietary estimates.
 * @member {Number} ebitAvg
 */
EbitEstimatesInfo.prototype['ebitAvg'] = undefined;

/**
 * Highest estimate.
 * @member {Number} ebitHigh
 */
EbitEstimatesInfo.prototype['ebitHigh'] = undefined;

/**
 * Lowest estimate.
 * @member {Number} ebitLow
 */
EbitEstimatesInfo.prototype['ebitLow'] = undefined;

/**
 * Number of Analysts.
 * @member {Number} numberAnalysts
 */
EbitEstimatesInfo.prototype['numberAnalysts'] = undefined;

/**
 * Period.
 * @member {Date} period
 */
EbitEstimatesInfo.prototype['period'] = undefined;






export default EbitEstimatesInfo;


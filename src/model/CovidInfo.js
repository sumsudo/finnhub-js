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
 * The CovidInfo model module.
 * @module model/CovidInfo
 * @version 1.1.3
 */
class CovidInfo {
    /**
     * Constructs a new <code>CovidInfo</code>.
     * @alias module:model/CovidInfo
     */
    constructor() { 
        
        CovidInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CovidInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CovidInfo} obj Optional instance to populate.
     * @return {module:model/CovidInfo} The populated <code>CovidInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CovidInfo();

            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('case')) {
                obj['case'] = ApiClient.convertToType(data['case'], 'Number');
            }
            if (data.hasOwnProperty('death')) {
                obj['death'] = ApiClient.convertToType(data['death'], 'Number');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * State.
 * @member {String} state
 */
CovidInfo.prototype['state'] = undefined;

/**
 * Number of confirmed cases.
 * @member {Number} case
 */
CovidInfo.prototype['case'] = undefined;

/**
 * Number of confirmed deaths.
 * @member {Number} death
 */
CovidInfo.prototype['death'] = undefined;

/**
 * Updated time.
 * @member {Date} updated
 */
CovidInfo.prototype['updated'] = undefined;






export default CovidInfo;


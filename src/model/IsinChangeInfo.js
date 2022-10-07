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
 * The IsinChangeInfo model module.
 * @module model/IsinChangeInfo
 * @version 1.2.16
 */
class IsinChangeInfo {
    /**
     * Constructs a new <code>IsinChangeInfo</code>.
     * @alias module:model/IsinChangeInfo
     */
    constructor() { 
        
        IsinChangeInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IsinChangeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IsinChangeInfo} obj Optional instance to populate.
     * @return {module:model/IsinChangeInfo} The populated <code>IsinChangeInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IsinChangeInfo();

            if (data.hasOwnProperty('atDate')) {
                obj['atDate'] = ApiClient.convertToType(data['atDate'], 'String');
            }
            if (data.hasOwnProperty('oldIsin')) {
                obj['oldIsin'] = ApiClient.convertToType(data['oldIsin'], 'String');
            }
            if (data.hasOwnProperty('newIsin')) {
                obj['newIsin'] = ApiClient.convertToType(data['newIsin'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Event's date.
 * @member {String} atDate
 */
IsinChangeInfo.prototype['atDate'] = undefined;

/**
 * Old ISIN.
 * @member {String} oldIsin
 */
IsinChangeInfo.prototype['oldIsin'] = undefined;

/**
 * New ISIN.
 * @member {String} newIsin
 */
IsinChangeInfo.prototype['newIsin'] = undefined;






export default IsinChangeInfo;


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
 * The FDAComitteeMeeting model module.
 * @module model/FDAComitteeMeeting
 * @version 1.2.16
 */
class FDAComitteeMeeting {
    /**
     * Constructs a new <code>FDAComitteeMeeting</code>.
     * @alias module:model/FDAComitteeMeeting
     */
    constructor() { 
        
        FDAComitteeMeeting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FDAComitteeMeeting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FDAComitteeMeeting} obj Optional instance to populate.
     * @return {module:model/FDAComitteeMeeting} The populated <code>FDAComitteeMeeting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FDAComitteeMeeting();

            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'String');
            }
            if (data.hasOwnProperty('toDate')) {
                obj['toDate'] = ApiClient.convertToType(data['toDate'], 'String');
            }
            if (data.hasOwnProperty('eventDescription')) {
                obj['eventDescription'] = ApiClient.convertToType(data['eventDescription'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Start time of the event in EST.
 * @member {String} fromDate
 */
FDAComitteeMeeting.prototype['fromDate'] = undefined;

/**
 * End time of the event in EST.
 * @member {String} toDate
 */
FDAComitteeMeeting.prototype['toDate'] = undefined;

/**
 * Event's description.
 * @member {String} eventDescription
 */
FDAComitteeMeeting.prototype['eventDescription'] = undefined;

/**
 * URL.
 * @member {String} url
 */
FDAComitteeMeeting.prototype['url'] = undefined;






export default FDAComitteeMeeting;


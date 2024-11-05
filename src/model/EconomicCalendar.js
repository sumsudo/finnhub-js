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
import EconomicEvent from './EconomicEvent';

/**
 * The EconomicCalendar model module.
 * @module model/EconomicCalendar
 * @version 1.2.19
 */
class EconomicCalendar {
    /**
     * Constructs a new <code>EconomicCalendar</code>.
     * @alias module:model/EconomicCalendar
     */
    constructor() { 
        
        EconomicCalendar.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EconomicCalendar</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EconomicCalendar} obj Optional instance to populate.
     * @return {module:model/EconomicCalendar} The populated <code>EconomicCalendar</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EconomicCalendar();

            if (data.hasOwnProperty('economicCalendar')) {
                obj['economicCalendar'] = ApiClient.convertToType(data['economicCalendar'], [EconomicEvent]);
            }
        }
        return obj;
    }


}

/**
 * Array of economic events.
 * @member {Array.<module:model/EconomicEvent>} economicCalendar
 */
EconomicCalendar.prototype['economicCalendar'] = undefined;






export default EconomicCalendar;


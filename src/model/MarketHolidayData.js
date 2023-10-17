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
 * The MarketHolidayData model module.
 * @module model/MarketHolidayData
 * @version 1.2.18
 */
class MarketHolidayData {
    /**
     * Constructs a new <code>MarketHolidayData</code>.
     * @alias module:model/MarketHolidayData
     */
    constructor() { 
        
        MarketHolidayData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MarketHolidayData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketHolidayData} obj Optional instance to populate.
     * @return {module:model/MarketHolidayData} The populated <code>MarketHolidayData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MarketHolidayData();

            if (data.hasOwnProperty('eventName')) {
                obj['eventName'] = ApiClient.convertToType(data['eventName'], 'String');
            }
            if (data.hasOwnProperty('atDate')) {
                obj['atDate'] = ApiClient.convertToType(data['atDate'], 'String');
            }
            if (data.hasOwnProperty('tradingHour')) {
                obj['tradingHour'] = ApiClient.convertToType(data['tradingHour'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Holiday's name.
 * @member {String} eventName
 */
MarketHolidayData.prototype['eventName'] = undefined;

/**
 * Date.
 * @member {String} atDate
 */
MarketHolidayData.prototype['atDate'] = undefined;

/**
 * Trading hours for this day if the market is partially closed only.
 * @member {String} tradingHour
 */
MarketHolidayData.prototype['tradingHour'] = undefined;






export default MarketHolidayData;


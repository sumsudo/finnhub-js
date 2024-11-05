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
import AirlinePriceIndex from './AirlinePriceIndex';

/**
 * The AirlinePriceIndexData model module.
 * @module model/AirlinePriceIndexData
 * @version 1.2.19
 */
class AirlinePriceIndexData {
    /**
     * Constructs a new <code>AirlinePriceIndexData</code>.
     * @alias module:model/AirlinePriceIndexData
     */
    constructor() { 
        
        AirlinePriceIndexData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AirlinePriceIndexData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AirlinePriceIndexData} obj Optional instance to populate.
     * @return {module:model/AirlinePriceIndexData} The populated <code>AirlinePriceIndexData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AirlinePriceIndexData();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [AirlinePriceIndex]);
            }
            if (data.hasOwnProperty('airline')) {
                obj['airline'] = ApiClient.convertToType(data['airline'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Array of price index.
 * @member {Array.<module:model/AirlinePriceIndex>} data
 */
AirlinePriceIndexData.prototype['data'] = undefined;

/**
 * Airline name
 * @member {String} airline
 */
AirlinePriceIndexData.prototype['airline'] = undefined;

/**
 * From date
 * @member {String} from
 */
AirlinePriceIndexData.prototype['from'] = undefined;

/**
 * To date
 * @member {String} to
 */
AirlinePriceIndexData.prototype['to'] = undefined;






export default AirlinePriceIndexData;


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
 * The IPOEvent model module.
 * @module model/IPOEvent
 * @version 1.2.19
 */
class IPOEvent {
    /**
     * Constructs a new <code>IPOEvent</code>.
     * @alias module:model/IPOEvent
     */
    constructor() { 
        
        IPOEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IPOEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IPOEvent} obj Optional instance to populate.
     * @return {module:model/IPOEvent} The populated <code>IPOEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IPOEvent();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('numberOfShares')) {
                obj['numberOfShares'] = ApiClient.convertToType(data['numberOfShares'], 'Number');
            }
            if (data.hasOwnProperty('totalSharesValue')) {
                obj['totalSharesValue'] = ApiClient.convertToType(data['totalSharesValue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Symbol.
 * @member {String} symbol
 */
IPOEvent.prototype['symbol'] = undefined;

/**
 * IPO date.
 * @member {Date} date
 */
IPOEvent.prototype['date'] = undefined;

/**
 * Exchange.
 * @member {String} exchange
 */
IPOEvent.prototype['exchange'] = undefined;

/**
 * Company's name.
 * @member {String} name
 */
IPOEvent.prototype['name'] = undefined;

/**
 * IPO status. Can take 1 of the following values: <code>expected</code>,<code>priced</code>,<code>withdrawn</code>,<code>filed</code>
 * @member {String} status
 */
IPOEvent.prototype['status'] = undefined;

/**
 * Projected price or price range.
 * @member {String} price
 */
IPOEvent.prototype['price'] = undefined;

/**
 * Number of shares offered during the IPO.
 * @member {Number} numberOfShares
 */
IPOEvent.prototype['numberOfShares'] = undefined;

/**
 * Total shares value.
 * @member {Number} totalSharesValue
 */
IPOEvent.prototype['totalSharesValue'] = undefined;






export default IPOEvent;


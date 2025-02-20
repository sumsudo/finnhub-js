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
 * The Indicator model module.
 * @module model/Indicator
 * @version 1.2.19
 */
class Indicator {
    /**
     * Constructs a new <code>Indicator</code>.
     * @alias module:model/Indicator
     */
    constructor() { 
        
        Indicator.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Indicator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Indicator} obj Optional instance to populate.
     * @return {module:model/Indicator} The populated <code>Indicator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Indicator();

            if (data.hasOwnProperty('buy')) {
                obj['buy'] = ApiClient.convertToType(data['buy'], 'Number');
            }
            if (data.hasOwnProperty('neutral')) {
                obj['neutral'] = ApiClient.convertToType(data['neutral'], 'Number');
            }
            if (data.hasOwnProperty('sell')) {
                obj['sell'] = ApiClient.convertToType(data['sell'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Number of buy signals
 * @member {Number} buy
 */
Indicator.prototype['buy'] = undefined;

/**
 * Number of neutral signals
 * @member {Number} neutral
 */
Indicator.prototype['neutral'] = undefined;

/**
 * Number of sell signals
 * @member {Number} sell
 */
Indicator.prototype['sell'] = undefined;






export default Indicator;


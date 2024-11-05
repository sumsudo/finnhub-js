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
 * The BreakdownItem model module.
 * @module model/BreakdownItem
 * @version 1.2.19
 */
class BreakdownItem {
    /**
     * Constructs a new <code>BreakdownItem</code>.
     * @alias module:model/BreakdownItem
     */
    constructor() { 
        
        BreakdownItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BreakdownItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BreakdownItem} obj Optional instance to populate.
     * @return {module:model/BreakdownItem} The populated <code>BreakdownItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BreakdownItem();

            if (data.hasOwnProperty('accessNumber')) {
                obj['accessNumber'] = ApiClient.convertToType(data['accessNumber'], 'String');
            }
            if (data.hasOwnProperty('breakdown')) {
                obj['breakdown'] = ApiClient.convertToType(data['breakdown'], Object);
            }
        }
        return obj;
    }


}

/**
 * Access number of the report from which the data is sourced.
 * @member {String} accessNumber
 */
BreakdownItem.prototype['accessNumber'] = undefined;

/**
 * @member {Object} breakdown
 */
BreakdownItem.prototype['breakdown'] = undefined;






export default BreakdownItem;


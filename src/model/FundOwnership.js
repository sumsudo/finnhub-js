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
import FundOwnershipInfo from './FundOwnershipInfo';

/**
 * The FundOwnership model module.
 * @module model/FundOwnership
 * @version 1.2.18
 */
class FundOwnership {
    /**
     * Constructs a new <code>FundOwnership</code>.
     * @alias module:model/FundOwnership
     */
    constructor() { 
        
        FundOwnership.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FundOwnership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundOwnership} obj Optional instance to populate.
     * @return {module:model/FundOwnership} The populated <code>FundOwnership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundOwnership();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('ownership')) {
                obj['ownership'] = ApiClient.convertToType(data['ownership'], [FundOwnershipInfo]);
            }
        }
        return obj;
    }


}

/**
 * Symbol of the company.
 * @member {String} symbol
 */
FundOwnership.prototype['symbol'] = undefined;

/**
 * Array of investors with detailed information about their holdings.
 * @member {Array.<module:model/FundOwnershipInfo>} ownership
 */
FundOwnership.prototype['ownership'] = undefined;






export default FundOwnership;


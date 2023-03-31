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
import MutualFundProfileData from './MutualFundProfileData';

/**
 * The MutualFundProfile model module.
 * @module model/MutualFundProfile
 * @version 1.2.17
 */
class MutualFundProfile {
    /**
     * Constructs a new <code>MutualFundProfile</code>.
     * @alias module:model/MutualFundProfile
     */
    constructor() { 
        
        MutualFundProfile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MutualFundProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundProfile} obj Optional instance to populate.
     * @return {module:model/MutualFundProfile} The populated <code>MutualFundProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MutualFundProfile();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('profile')) {
                obj['profile'] = MutualFundProfileData.constructFromObject(data['profile']);
            }
        }
        return obj;
    }


}

/**
 * Symbol.
 * @member {String} symbol
 */
MutualFundProfile.prototype['symbol'] = undefined;

/**
 * @member {module:model/MutualFundProfileData} profile
 */
MutualFundProfile.prototype['profile'] = undefined;






export default MutualFundProfile;


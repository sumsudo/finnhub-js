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
import InstitutionalProfileInfo from './InstitutionalProfileInfo';

/**
 * The InstitutionalProfile model module.
 * @module model/InstitutionalProfile
 * @version 1.2.17
 */
class InstitutionalProfile {
    /**
     * Constructs a new <code>InstitutionalProfile</code>.
     * @alias module:model/InstitutionalProfile
     */
    constructor() { 
        
        InstitutionalProfile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstitutionalProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstitutionalProfile} obj Optional instance to populate.
     * @return {module:model/InstitutionalProfile} The populated <code>InstitutionalProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstitutionalProfile();

            if (data.hasOwnProperty('cik')) {
                obj['cik'] = ApiClient.convertToType(data['cik'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [InstitutionalProfileInfo]);
            }
        }
        return obj;
    }


}

/**
 * CIK.
 * @member {String} cik
 */
InstitutionalProfile.prototype['cik'] = undefined;

/**
 * Array of investors.
 * @member {Array.<module:model/InstitutionalProfileInfo>} data
 */
InstitutionalProfile.prototype['data'] = undefined;






export default InstitutionalProfile;


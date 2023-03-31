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
import InstitutionalOwnershipInfo from './InstitutionalOwnershipInfo';

/**
 * The InstitutionalOwnershipGroup model module.
 * @module model/InstitutionalOwnershipGroup
 * @version 1.2.17
 */
class InstitutionalOwnershipGroup {
    /**
     * Constructs a new <code>InstitutionalOwnershipGroup</code>.
     * @alias module:model/InstitutionalOwnershipGroup
     */
    constructor() { 
        
        InstitutionalOwnershipGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstitutionalOwnershipGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstitutionalOwnershipGroup} obj Optional instance to populate.
     * @return {module:model/InstitutionalOwnershipGroup} The populated <code>InstitutionalOwnershipGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstitutionalOwnershipGroup();

            if (data.hasOwnProperty('reportDate')) {
                obj['reportDate'] = ApiClient.convertToType(data['reportDate'], 'String');
            }
            if (data.hasOwnProperty('ownership')) {
                obj['ownership'] = ApiClient.convertToType(data['ownership'], [InstitutionalOwnershipInfo]);
            }
        }
        return obj;
    }


}

/**
 * Report date.
 * @member {String} reportDate
 */
InstitutionalOwnershipGroup.prototype['reportDate'] = undefined;

/**
 * Array of institutional investors.
 * @member {Array.<module:model/InstitutionalOwnershipInfo>} ownership
 */
InstitutionalOwnershipGroup.prototype['ownership'] = undefined;






export default InstitutionalOwnershipGroup;


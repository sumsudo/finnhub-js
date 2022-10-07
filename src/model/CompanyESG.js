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
 * The CompanyESG model module.
 * @module model/CompanyESG
 * @version 1.2.16
 */
class CompanyESG {
    /**
     * Constructs a new <code>CompanyESG</code>.
     * @alias module:model/CompanyESG
     */
    constructor() { 
        
        CompanyESG.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyESG</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyESG} obj Optional instance to populate.
     * @return {module:model/CompanyESG} The populated <code>CompanyESG</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyESG();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('totalESGScore')) {
                obj['totalESGScore'] = ApiClient.convertToType(data['totalESGScore'], 'Number');
            }
            if (data.hasOwnProperty('environmentScore')) {
                obj['environmentScore'] = ApiClient.convertToType(data['environmentScore'], 'Number');
            }
            if (data.hasOwnProperty('governanceScore')) {
                obj['governanceScore'] = ApiClient.convertToType(data['governanceScore'], 'Number');
            }
            if (data.hasOwnProperty('socialScore')) {
                obj['socialScore'] = ApiClient.convertToType(data['socialScore'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
        }
        return obj;
    }


}

/**
 * symbol
 * @member {String} symbol
 */
CompanyESG.prototype['symbol'] = undefined;

/**
 * Total ESG Score
 * @member {Number} totalESGScore
 */
CompanyESG.prototype['totalESGScore'] = undefined;

/**
 * Environment Score
 * @member {Number} environmentScore
 */
CompanyESG.prototype['environmentScore'] = undefined;

/**
 * Governance Score
 * @member {Number} governanceScore
 */
CompanyESG.prototype['governanceScore'] = undefined;

/**
 * Social Score
 * @member {Number} socialScore
 */
CompanyESG.prototype['socialScore'] = undefined;

/**
 * @member {Object} data
 */
CompanyESG.prototype['data'] = undefined;






export default CompanyESG;


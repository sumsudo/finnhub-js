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
 * The UsptoPatent model module.
 * @module model/UsptoPatent
 * @version 1.2.14
 */
class UsptoPatent {
    /**
     * Constructs a new <code>UsptoPatent</code>.
     * @alias module:model/UsptoPatent
     */
    constructor() { 
        
        UsptoPatent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UsptoPatent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsptoPatent} obj Optional instance to populate.
     * @return {module:model/UsptoPatent} The populated <code>UsptoPatent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsptoPatent();

            if (data.hasOwnProperty('applicationNumber')) {
                obj['applicationNumber'] = ApiClient.convertToType(data['applicationNumber'], 'String');
            }
            if (data.hasOwnProperty('companyFilingName')) {
                obj['companyFilingName'] = ApiClient.convertToType(data['companyFilingName'], ['String']);
            }
            if (data.hasOwnProperty('filingDate')) {
                obj['filingDate'] = ApiClient.convertToType(data['filingDate'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('filingStatus')) {
                obj['filingStatus'] = ApiClient.convertToType(data['filingStatus'], 'String');
            }
            if (data.hasOwnProperty('patentNumber')) {
                obj['patentNumber'] = ApiClient.convertToType(data['patentNumber'], 'String');
            }
            if (data.hasOwnProperty('publicationDate')) {
                obj['publicationDate'] = ApiClient.convertToType(data['publicationDate'], 'String');
            }
            if (data.hasOwnProperty('patentType')) {
                obj['patentType'] = ApiClient.convertToType(data['patentType'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Application Number.
 * @member {String} applicationNumber
 */
UsptoPatent.prototype['applicationNumber'] = undefined;

/**
 * Array of companies' name on the patent.
 * @member {Array.<String>} companyFilingName
 */
UsptoPatent.prototype['companyFilingName'] = undefined;

/**
 * Filing date.
 * @member {String} filingDate
 */
UsptoPatent.prototype['filingDate'] = undefined;

/**
 * Description.
 * @member {String} description
 */
UsptoPatent.prototype['description'] = undefined;

/**
 * Filing status.
 * @member {String} filingStatus
 */
UsptoPatent.prototype['filingStatus'] = undefined;

/**
 * Patent number.
 * @member {String} patentNumber
 */
UsptoPatent.prototype['patentNumber'] = undefined;

/**
 * Publication date.
 * @member {String} publicationDate
 */
UsptoPatent.prototype['publicationDate'] = undefined;

/**
 * Patent's type.
 * @member {String} patentType
 */
UsptoPatent.prototype['patentType'] = undefined;

/**
 * URL of the original article.
 * @member {String} url
 */
UsptoPatent.prototype['url'] = undefined;






export default UsptoPatent;


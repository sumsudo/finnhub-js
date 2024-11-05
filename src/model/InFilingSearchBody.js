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
 * The InFilingSearchBody model module.
 * @module model/InFilingSearchBody
 * @version 1.2.19
 */
class InFilingSearchBody {
    /**
     * Constructs a new <code>InFilingSearchBody</code>.
     * @alias module:model/InFilingSearchBody
     * @param query {String} Search query
     * @param filingId {String} Filing Id to search
     */
    constructor(query, filingId) { 
        
        InFilingSearchBody.initialize(this, query, filingId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, query, filingId) { 
        obj['query'] = query;
        obj['filingId'] = filingId;
    }

    /**
     * Constructs a <code>InFilingSearchBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InFilingSearchBody} obj Optional instance to populate.
     * @return {module:model/InFilingSearchBody} The populated <code>InFilingSearchBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InFilingSearchBody();

            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('filingId')) {
                obj['filingId'] = ApiClient.convertToType(data['filingId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Search query
 * @member {String} query
 */
InFilingSearchBody.prototype['query'] = undefined;

/**
 * Filing Id to search
 * @member {String} filingId
 */
InFilingSearchBody.prototype['filingId'] = undefined;






export default InFilingSearchBody;


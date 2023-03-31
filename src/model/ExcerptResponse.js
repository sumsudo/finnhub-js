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
 * The ExcerptResponse model module.
 * @module model/ExcerptResponse
 * @version 1.2.17
 */
class ExcerptResponse {
    /**
     * Constructs a new <code>ExcerptResponse</code>.
     * @alias module:model/ExcerptResponse
     */
    constructor() { 
        
        ExcerptResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExcerptResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExcerptResponse} obj Optional instance to populate.
     * @return {module:model/ExcerptResponse} The populated <code>ExcerptResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExcerptResponse();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('snippetId')) {
                obj['snippetId'] = ApiClient.convertToType(data['snippetId'], 'String');
            }
            if (data.hasOwnProperty('startOffset')) {
                obj['startOffset'] = ApiClient.convertToType(data['startOffset'], 'String');
            }
            if (data.hasOwnProperty('endOffset')) {
                obj['endOffset'] = ApiClient.convertToType(data['endOffset'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Highlighted content
 * @member {String} content
 */
ExcerptResponse.prototype['content'] = undefined;

/**
 * Location of the content in the rendered document
 * @member {String} snippetId
 */
ExcerptResponse.prototype['snippetId'] = undefined;

/**
 * Start offset of highlighted content
 * @member {String} startOffset
 */
ExcerptResponse.prototype['startOffset'] = undefined;

/**
 * End offset of highlighted content
 * @member {String} endOffset
 */
ExcerptResponse.prototype['endOffset'] = undefined;






export default ExcerptResponse;


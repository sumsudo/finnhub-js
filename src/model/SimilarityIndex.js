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
import SimilarityIndexInfo from './SimilarityIndexInfo';

/**
 * The SimilarityIndex model module.
 * @module model/SimilarityIndex
 * @version 1.2.19
 */
class SimilarityIndex {
    /**
     * Constructs a new <code>SimilarityIndex</code>.
     * @alias module:model/SimilarityIndex
     */
    constructor() { 
        
        SimilarityIndex.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SimilarityIndex</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimilarityIndex} obj Optional instance to populate.
     * @return {module:model/SimilarityIndex} The populated <code>SimilarityIndex</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimilarityIndex();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('cik')) {
                obj['cik'] = ApiClient.convertToType(data['cik'], 'String');
            }
            if (data.hasOwnProperty('similarity')) {
                obj['similarity'] = ApiClient.convertToType(data['similarity'], [SimilarityIndexInfo]);
            }
        }
        return obj;
    }


}

/**
 * Symbol.
 * @member {String} symbol
 */
SimilarityIndex.prototype['symbol'] = undefined;

/**
 * CIK.
 * @member {String} cik
 */
SimilarityIndex.prototype['cik'] = undefined;

/**
 * Array of filings with its cosine similarity compared to the same report of the previous year.
 * @member {Array.<module:model/SimilarityIndexInfo>} similarity
 */
SimilarityIndex.prototype['similarity'] = undefined;






export default SimilarityIndex;


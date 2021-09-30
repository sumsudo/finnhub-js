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
import FilingSentiment from './FilingSentiment';

/**
 * The SECSentimentAnalysis model module.
 * @module model/SECSentimentAnalysis
 * @version 1.2.7
 */
class SECSentimentAnalysis {
    /**
     * Constructs a new <code>SECSentimentAnalysis</code>.
     * @alias module:model/SECSentimentAnalysis
     */
    constructor() { 
        
        SECSentimentAnalysis.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SECSentimentAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SECSentimentAnalysis} obj Optional instance to populate.
     * @return {module:model/SECSentimentAnalysis} The populated <code>SECSentimentAnalysis</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SECSentimentAnalysis();

            if (data.hasOwnProperty('accessNumber')) {
                obj['accessNumber'] = ApiClient.convertToType(data['accessNumber'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('cik')) {
                obj['cik'] = ApiClient.convertToType(data['cik'], 'String');
            }
            if (data.hasOwnProperty('sentiment')) {
                obj['sentiment'] = FilingSentiment.constructFromObject(data['sentiment']);
            }
        }
        return obj;
    }


}

/**
 * Access number.
 * @member {String} accessNumber
 */
SECSentimentAnalysis.prototype['accessNumber'] = undefined;

/**
 * Symbol.
 * @member {String} symbol
 */
SECSentimentAnalysis.prototype['symbol'] = undefined;

/**
 * CIK.
 * @member {String} cik
 */
SECSentimentAnalysis.prototype['cik'] = undefined;

/**
 * @member {module:model/FilingSentiment} sentiment
 */
SECSentimentAnalysis.prototype['sentiment'] = undefined;






export default SECSentimentAnalysis;


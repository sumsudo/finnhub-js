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
import SentimentContent from './SentimentContent';

/**
 * The SocialSentiment model module.
 * @module model/SocialSentiment
 * @version 1.2.18
 */
class SocialSentiment {
    /**
     * Constructs a new <code>SocialSentiment</code>.
     * @alias module:model/SocialSentiment
     */
    constructor() { 
        
        SocialSentiment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SocialSentiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SocialSentiment} obj Optional instance to populate.
     * @return {module:model/SocialSentiment} The populated <code>SocialSentiment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SocialSentiment();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [SentimentContent]);
            }
        }
        return obj;
    }


}

/**
 * Company symbol.
 * @member {String} symbol
 */
SocialSentiment.prototype['symbol'] = undefined;

/**
 * Sentiment data.
 * @member {Array.<module:model/SentimentContent>} data
 */
SocialSentiment.prototype['data'] = undefined;






export default SocialSentiment;


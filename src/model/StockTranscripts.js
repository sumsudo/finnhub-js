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
 * The StockTranscripts model module.
 * @module model/StockTranscripts
 * @version 1.2.7
 */
class StockTranscripts {
    /**
     * Constructs a new <code>StockTranscripts</code>.
     * @alias module:model/StockTranscripts
     */
    constructor() { 
        
        StockTranscripts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockTranscripts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockTranscripts} obj Optional instance to populate.
     * @return {module:model/StockTranscripts} The populated <code>StockTranscripts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockTranscripts();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
            if (data.hasOwnProperty('quarter')) {
                obj['quarter'] = ApiClient.convertToType(data['quarter'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Transcript's ID used to get the <a href=\"#transcripts\">full transcript</a>.
 * @member {String} id
 */
StockTranscripts.prototype['id'] = undefined;

/**
 * Title.
 * @member {String} title
 */
StockTranscripts.prototype['title'] = undefined;

/**
 * Time of the event.
 * @member {String} time
 */
StockTranscripts.prototype['time'] = undefined;

/**
 * Year of earnings result in the case of earnings call transcript.
 * @member {Number} year
 */
StockTranscripts.prototype['year'] = undefined;

/**
 * Quarter of earnings result in the case of earnings call transcript.
 * @member {Number} quarter
 */
StockTranscripts.prototype['quarter'] = undefined;






export default StockTranscripts;


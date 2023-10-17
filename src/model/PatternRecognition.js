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
 * The PatternRecognition model module.
 * @module model/PatternRecognition
 * @version 1.2.18
 */
class PatternRecognition {
    /**
     * Constructs a new <code>PatternRecognition</code>.
     * @alias module:model/PatternRecognition
     */
    constructor() { 
        
        PatternRecognition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatternRecognition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatternRecognition} obj Optional instance to populate.
     * @return {module:model/PatternRecognition} The populated <code>PatternRecognition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatternRecognition();

            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Array of patterns.
 * @member {Array.<Object>} points
 */
PatternRecognition.prototype['points'] = undefined;






export default PatternRecognition;


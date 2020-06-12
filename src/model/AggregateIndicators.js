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
import TechnicalAnalysis from './TechnicalAnalysis';
import Trend from './Trend';

/**
 * The AggregateIndicators model module.
 * @module model/AggregateIndicators
 * @version 1.1.3
 */
class AggregateIndicators {
    /**
     * Constructs a new <code>AggregateIndicators</code>.
     * @alias module:model/AggregateIndicators
     */
    constructor() { 
        
        AggregateIndicators.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AggregateIndicators</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AggregateIndicators} obj Optional instance to populate.
     * @return {module:model/AggregateIndicators} The populated <code>AggregateIndicators</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AggregateIndicators();

            if (data.hasOwnProperty('technicalAnalysis')) {
                obj['technicalAnalysis'] = TechnicalAnalysis.constructFromObject(data['technicalAnalysis']);
            }
            if (data.hasOwnProperty('trend')) {
                obj['trend'] = Trend.constructFromObject(data['trend']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TechnicalAnalysis} technicalAnalysis
 */
AggregateIndicators.prototype['technicalAnalysis'] = undefined;

/**
 * @member {module:model/Trend} trend
 */
AggregateIndicators.prototype['trend'] = undefined;






export default AggregateIndicators;


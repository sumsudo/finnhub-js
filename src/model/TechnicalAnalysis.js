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
import Indicator from './Indicator';

/**
 * The TechnicalAnalysis model module.
 * @module model/TechnicalAnalysis
 * @version 1.2.19
 */
class TechnicalAnalysis {
    /**
     * Constructs a new <code>TechnicalAnalysis</code>.
     * @alias module:model/TechnicalAnalysis
     */
    constructor() { 
        
        TechnicalAnalysis.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TechnicalAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TechnicalAnalysis} obj Optional instance to populate.
     * @return {module:model/TechnicalAnalysis} The populated <code>TechnicalAnalysis</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TechnicalAnalysis();

            if (data.hasOwnProperty('count')) {
                obj['count'] = Indicator.constructFromObject(data['count']);
            }
            if (data.hasOwnProperty('signal')) {
                obj['signal'] = ApiClient.convertToType(data['signal'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Indicator} count
 */
TechnicalAnalysis.prototype['count'] = undefined;

/**
 * Aggregate Signal
 * @member {String} signal
 */
TechnicalAnalysis.prototype['signal'] = undefined;






export default TechnicalAnalysis;


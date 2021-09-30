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
 * The HistoricalNBBO model module.
 * @module model/HistoricalNBBO
 * @version 1.2.7
 */
class HistoricalNBBO {
    /**
     * Constructs a new <code>HistoricalNBBO</code>.
     * @alias module:model/HistoricalNBBO
     */
    constructor() { 
        
        HistoricalNBBO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalNBBO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalNBBO} obj Optional instance to populate.
     * @return {module:model/HistoricalNBBO} The populated <code>HistoricalNBBO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalNBBO();

            if (data.hasOwnProperty('s')) {
                obj['s'] = ApiClient.convertToType(data['s'], 'String');
            }
            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('av')) {
                obj['av'] = ApiClient.convertToType(data['av'], ['Number']);
            }
            if (data.hasOwnProperty('a')) {
                obj['a'] = ApiClient.convertToType(data['a'], ['Number']);
            }
            if (data.hasOwnProperty('ax')) {
                obj['ax'] = ApiClient.convertToType(data['ax'], ['String']);
            }
            if (data.hasOwnProperty('bv')) {
                obj['bv'] = ApiClient.convertToType(data['bv'], ['Number']);
            }
            if (data.hasOwnProperty('b')) {
                obj['b'] = ApiClient.convertToType(data['b'], ['Number']);
            }
            if (data.hasOwnProperty('bx')) {
                obj['bx'] = ApiClient.convertToType(data['bx'], ['String']);
            }
            if (data.hasOwnProperty('t')) {
                obj['t'] = ApiClient.convertToType(data['t'], ['Number']);
            }
            if (data.hasOwnProperty('c')) {
                obj['c'] = ApiClient.convertToType(data['c'], [['String']]);
            }
        }
        return obj;
    }


}

/**
 * Symbol.
 * @member {String} s
 */
HistoricalNBBO.prototype['s'] = undefined;

/**
 * Number of ticks skipped.
 * @member {Number} skip
 */
HistoricalNBBO.prototype['skip'] = undefined;

/**
 * Number of ticks returned. If <code>count</code> < <code>limit</code>, all data for that date has been returned.
 * @member {Number} count
 */
HistoricalNBBO.prototype['count'] = undefined;

/**
 * Total number of ticks for that date.
 * @member {Number} total
 */
HistoricalNBBO.prototype['total'] = undefined;

/**
 * List of Ask volume data.
 * @member {Array.<Number>} av
 */
HistoricalNBBO.prototype['av'] = undefined;

/**
 * List of Ask price data.
 * @member {Array.<Number>} a
 */
HistoricalNBBO.prototype['a'] = undefined;

/**
 * List of venues/exchanges - Ask price. A list of exchange codes can be found <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1Tj53M1svmr-hfEtbk6_NpVR1yAyGLMaH6ByYU6CG0ZY/edit?usp=sharing\",>here</a>
 * @member {Array.<String>} ax
 */
HistoricalNBBO.prototype['ax'] = undefined;

/**
 * List of Bid volume data.
 * @member {Array.<Number>} bv
 */
HistoricalNBBO.prototype['bv'] = undefined;

/**
 * List of Bid price data.
 * @member {Array.<Number>} b
 */
HistoricalNBBO.prototype['b'] = undefined;

/**
 * List of venues/exchanges - Bid price. A list of exchange codes can be found <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1Tj53M1svmr-hfEtbk6_NpVR1yAyGLMaH6ByYU6CG0ZY/edit?usp=sharing\",>here</a>
 * @member {Array.<String>} bx
 */
HistoricalNBBO.prototype['bx'] = undefined;

/**
 * List of timestamp in UNIX ms.
 * @member {Array.<Number>} t
 */
HistoricalNBBO.prototype['t'] = undefined;

/**
 * List of quote conditions. A comprehensive list of quote conditions code can be found <a target=\"_blank\" href=\"https://docs.google.com/spreadsheets/d/1iiA6e7Osdtai0oPMOUzgAIKXCsay89dFDmsegz6OpEg/edit?usp=sharing\">here</a>
 * @member {Array.<Array.<String>>} c
 */
HistoricalNBBO.prototype['c'] = undefined;






export default HistoricalNBBO;


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
import ETFCountryExposureData from './ETFCountryExposureData';

/**
 * The ETFsCountryExposure model module.
 * @module model/ETFsCountryExposure
 * @version 1.2.19
 */
class ETFsCountryExposure {
    /**
     * Constructs a new <code>ETFsCountryExposure</code>.
     * @alias module:model/ETFsCountryExposure
     */
    constructor() { 
        
        ETFsCountryExposure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ETFsCountryExposure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFsCountryExposure} obj Optional instance to populate.
     * @return {module:model/ETFsCountryExposure} The populated <code>ETFsCountryExposure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ETFsCountryExposure();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('countryExposure')) {
                obj['countryExposure'] = ApiClient.convertToType(data['countryExposure'], [ETFCountryExposureData]);
            }
        }
        return obj;
    }


}

/**
 * ETF symbol.
 * @member {String} symbol
 */
ETFsCountryExposure.prototype['symbol'] = undefined;

/**
 * Array of countries and and exposure levels.
 * @member {Array.<module:model/ETFCountryExposureData>} countryExposure
 */
ETFsCountryExposure.prototype['countryExposure'] = undefined;






export default ETFsCountryExposure;


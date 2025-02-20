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
 * The SymbolChangeInfo model module.
 * @module model/SymbolChangeInfo
 * @version 1.2.19
 */
class SymbolChangeInfo {
    /**
     * Constructs a new <code>SymbolChangeInfo</code>.
     * @alias module:model/SymbolChangeInfo
     */
    constructor() { 
        
        SymbolChangeInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SymbolChangeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SymbolChangeInfo} obj Optional instance to populate.
     * @return {module:model/SymbolChangeInfo} The populated <code>SymbolChangeInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SymbolChangeInfo();

            if (data.hasOwnProperty('atDate')) {
                obj['atDate'] = ApiClient.convertToType(data['atDate'], 'String');
            }
            if (data.hasOwnProperty('oldSymbol')) {
                obj['oldSymbol'] = ApiClient.convertToType(data['oldSymbol'], 'String');
            }
            if (data.hasOwnProperty('newSymbol')) {
                obj['newSymbol'] = ApiClient.convertToType(data['newSymbol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Event's date.
 * @member {String} atDate
 */
SymbolChangeInfo.prototype['atDate'] = undefined;

/**
 * Old symbol.
 * @member {String} oldSymbol
 */
SymbolChangeInfo.prototype['oldSymbol'] = undefined;

/**
 * New symbol.
 * @member {String} newSymbol
 */
SymbolChangeInfo.prototype['newSymbol'] = undefined;






export default SymbolChangeInfo;


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
 * The ETFProfileData model module.
 * @module model/ETFProfileData
 * @version 1.2.19
 */
class ETFProfileData {
    /**
     * Constructs a new <code>ETFProfileData</code>.
     * @alias module:model/ETFProfileData
     */
    constructor() { 
        
        ETFProfileData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ETFProfileData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFProfileData} obj Optional instance to populate.
     * @return {module:model/ETFProfileData} The populated <code>ETFProfileData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ETFProfileData();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('assetClass')) {
                obj['assetClass'] = ApiClient.convertToType(data['assetClass'], 'String');
            }
            if (data.hasOwnProperty('investmentSegment')) {
                obj['investmentSegment'] = ApiClient.convertToType(data['investmentSegment'], 'String');
            }
            if (data.hasOwnProperty('aum')) {
                obj['aum'] = ApiClient.convertToType(data['aum'], 'Number');
            }
            if (data.hasOwnProperty('nav')) {
                obj['nav'] = ApiClient.convertToType(data['nav'], 'Number');
            }
            if (data.hasOwnProperty('navCurrency')) {
                obj['navCurrency'] = ApiClient.convertToType(data['navCurrency'], 'String');
            }
            if (data.hasOwnProperty('expenseRatio')) {
                obj['expenseRatio'] = ApiClient.convertToType(data['expenseRatio'], 'Number');
            }
            if (data.hasOwnProperty('trackingIndex')) {
                obj['trackingIndex'] = ApiClient.convertToType(data['trackingIndex'], 'String');
            }
            if (data.hasOwnProperty('etfCompany')) {
                obj['etfCompany'] = ApiClient.convertToType(data['etfCompany'], 'String');
            }
            if (data.hasOwnProperty('domicile')) {
                obj['domicile'] = ApiClient.convertToType(data['domicile'], 'String');
            }
            if (data.hasOwnProperty('inceptionDate')) {
                obj['inceptionDate'] = ApiClient.convertToType(data['inceptionDate'], 'Date');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('isin')) {
                obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
            }
            if (data.hasOwnProperty('cusip')) {
                obj['cusip'] = ApiClient.convertToType(data['cusip'], 'String');
            }
            if (data.hasOwnProperty('priceToEarnings')) {
                obj['priceToEarnings'] = ApiClient.convertToType(data['priceToEarnings'], 'Number');
            }
            if (data.hasOwnProperty('priceToBook')) {
                obj['priceToBook'] = ApiClient.convertToType(data['priceToBook'], 'Number');
            }
            if (data.hasOwnProperty('avgVolume')) {
                obj['avgVolume'] = ApiClient.convertToType(data['avgVolume'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('isInverse')) {
                obj['isInverse'] = ApiClient.convertToType(data['isInverse'], 'Boolean');
            }
            if (data.hasOwnProperty('isLeveraged')) {
                obj['isLeveraged'] = ApiClient.convertToType(data['isLeveraged'], 'Boolean');
            }
            if (data.hasOwnProperty('leverageFactor')) {
                obj['leverageFactor'] = ApiClient.convertToType(data['leverageFactor'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Name
 * @member {String} name
 */
ETFProfileData.prototype['name'] = undefined;

/**
 * Asset Class.
 * @member {String} assetClass
 */
ETFProfileData.prototype['assetClass'] = undefined;

/**
 * Investment Segment.
 * @member {String} investmentSegment
 */
ETFProfileData.prototype['investmentSegment'] = undefined;

/**
 * AUM.
 * @member {Number} aum
 */
ETFProfileData.prototype['aum'] = undefined;

/**
 * NAV.
 * @member {Number} nav
 */
ETFProfileData.prototype['nav'] = undefined;

/**
 * NAV currency.
 * @member {String} navCurrency
 */
ETFProfileData.prototype['navCurrency'] = undefined;

/**
 * Expense ratio. For non-US funds, this is the <a href=\"https://www.esma.europa.eu/sites/default/files/library/2015/11/09_1028_final_kid_ongoing_charges_methodology_for_publication_u_2_.pdf\" target=\"_blank\">KID ongoing charges<a/>.
 * @member {Number} expenseRatio
 */
ETFProfileData.prototype['expenseRatio'] = undefined;

/**
 * Tracking Index.
 * @member {String} trackingIndex
 */
ETFProfileData.prototype['trackingIndex'] = undefined;

/**
 * ETF issuer.
 * @member {String} etfCompany
 */
ETFProfileData.prototype['etfCompany'] = undefined;

/**
 * ETF domicile.
 * @member {String} domicile
 */
ETFProfileData.prototype['domicile'] = undefined;

/**
 * Inception date.
 * @member {Date} inceptionDate
 */
ETFProfileData.prototype['inceptionDate'] = undefined;

/**
 * ETF's website.
 * @member {String} website
 */
ETFProfileData.prototype['website'] = undefined;

/**
 * Logo.
 * @member {String} logo
 */
ETFProfileData.prototype['logo'] = undefined;

/**
 * ISIN.
 * @member {String} isin
 */
ETFProfileData.prototype['isin'] = undefined;

/**
 * CUSIP.
 * @member {String} cusip
 */
ETFProfileData.prototype['cusip'] = undefined;

/**
 * P/E.
 * @member {Number} priceToEarnings
 */
ETFProfileData.prototype['priceToEarnings'] = undefined;

/**
 * P/B.
 * @member {Number} priceToBook
 */
ETFProfileData.prototype['priceToBook'] = undefined;

/**
 * 30-day average volume.
 * @member {Number} avgVolume
 */
ETFProfileData.prototype['avgVolume'] = undefined;

/**
 * ETF's description.
 * @member {String} description
 */
ETFProfileData.prototype['description'] = undefined;

/**
 * Whether the ETF is inverse
 * @member {Boolean} isInverse
 */
ETFProfileData.prototype['isInverse'] = undefined;

/**
 * Whether the ETF is leveraged
 * @member {Boolean} isLeveraged
 */
ETFProfileData.prototype['isLeveraged'] = undefined;

/**
 * Leverage factor.
 * @member {Number} leverageFactor
 */
ETFProfileData.prototype['leverageFactor'] = undefined;






export default ETFProfileData;


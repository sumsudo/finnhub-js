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
 * The MutualFundProfileData model module.
 * @module model/MutualFundProfileData
 * @version 1.2.16
 */
class MutualFundProfileData {
    /**
     * Constructs a new <code>MutualFundProfileData</code>.
     * @alias module:model/MutualFundProfileData
     */
    constructor() { 
        
        MutualFundProfileData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MutualFundProfileData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundProfileData} obj Optional instance to populate.
     * @return {module:model/MutualFundProfileData} The populated <code>MutualFundProfileData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MutualFundProfileData();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('investmentSegment')) {
                obj['investmentSegment'] = ApiClient.convertToType(data['investmentSegment'], 'String');
            }
            if (data.hasOwnProperty('totalNav')) {
                obj['totalNav'] = ApiClient.convertToType(data['totalNav'], 'Number');
            }
            if (data.hasOwnProperty('expenseRatio')) {
                obj['expenseRatio'] = ApiClient.convertToType(data['expenseRatio'], 'Number');
            }
            if (data.hasOwnProperty('benchmark')) {
                obj['benchmark'] = ApiClient.convertToType(data['benchmark'], 'String');
            }
            if (data.hasOwnProperty('inceptionDate')) {
                obj['inceptionDate'] = ApiClient.convertToType(data['inceptionDate'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('fundFamily')) {
                obj['fundFamily'] = ApiClient.convertToType(data['fundFamily'], 'String');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ApiClient.convertToType(data['manager'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('beta')) {
                obj['beta'] = ApiClient.convertToType(data['beta'], 'Number');
            }
            if (data.hasOwnProperty('deferredLoad')) {
                obj['deferredLoad'] = ApiClient.convertToType(data['deferredLoad'], 'Number');
            }
            if (data.hasOwnProperty('fee12b1')) {
                obj['fee12b1'] = ApiClient.convertToType(data['fee12b1'], 'Number');
            }
            if (data.hasOwnProperty('frontLoad')) {
                obj['frontLoad'] = ApiClient.convertToType(data['frontLoad'], 'Number');
            }
            if (data.hasOwnProperty('iraMinInvestment')) {
                obj['iraMinInvestment'] = ApiClient.convertToType(data['iraMinInvestment'], 'Number');
            }
            if (data.hasOwnProperty('isin')) {
                obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
            }
            if (data.hasOwnProperty('cusip')) {
                obj['cusip'] = ApiClient.convertToType(data['cusip'], 'String');
            }
            if (data.hasOwnProperty('maxRedemptionFee')) {
                obj['maxRedemptionFee'] = ApiClient.convertToType(data['maxRedemptionFee'], 'Number');
            }
            if (data.hasOwnProperty('standardMinInvestment')) {
                obj['standardMinInvestment'] = ApiClient.convertToType(data['standardMinInvestment'], 'Number');
            }
            if (data.hasOwnProperty('turnover')) {
                obj['turnover'] = ApiClient.convertToType(data['turnover'], 'Number');
            }
            if (data.hasOwnProperty('seriesId')) {
                obj['seriesId'] = ApiClient.convertToType(data['seriesId'], 'String');
            }
            if (data.hasOwnProperty('seriesName')) {
                obj['seriesName'] = ApiClient.convertToType(data['seriesName'], 'String');
            }
            if (data.hasOwnProperty('classId')) {
                obj['classId'] = ApiClient.convertToType(data['classId'], 'String');
            }
            if (data.hasOwnProperty('className')) {
                obj['className'] = ApiClient.convertToType(data['className'], 'String');
            }
            if (data.hasOwnProperty('sfdrClassification')) {
                obj['sfdrClassification'] = ApiClient.convertToType(data['sfdrClassification'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name
 * @member {String} name
 */
MutualFundProfileData.prototype['name'] = undefined;

/**
 * Fund's category.
 * @member {String} category
 */
MutualFundProfileData.prototype['category'] = undefined;

/**
 * Investment Segment.
 * @member {String} investmentSegment
 */
MutualFundProfileData.prototype['investmentSegment'] = undefined;

/**
 * NAV.
 * @member {Number} totalNav
 */
MutualFundProfileData.prototype['totalNav'] = undefined;

/**
 * Expense ratio.
 * @member {Number} expenseRatio
 */
MutualFundProfileData.prototype['expenseRatio'] = undefined;

/**
 * Index benchmark.
 * @member {String} benchmark
 */
MutualFundProfileData.prototype['benchmark'] = undefined;

/**
 * Inception date.
 * @member {Date} inceptionDate
 */
MutualFundProfileData.prototype['inceptionDate'] = undefined;

/**
 * Fund's description.
 * @member {String} description
 */
MutualFundProfileData.prototype['description'] = undefined;

/**
 * Fund Family.
 * @member {String} fundFamily
 */
MutualFundProfileData.prototype['fundFamily'] = undefined;

/**
 * Fund's managers.
 * @member {String} manager
 */
MutualFundProfileData.prototype['manager'] = undefined;

/**
 * Status.
 * @member {String} status
 */
MutualFundProfileData.prototype['status'] = undefined;

/**
 * Beta.
 * @member {Number} beta
 */
MutualFundProfileData.prototype['beta'] = undefined;

/**
 * Deferred load.
 * @member {Number} deferredLoad
 */
MutualFundProfileData.prototype['deferredLoad'] = undefined;

/**
 * 12B-1 fee.
 * @member {Number} fee12b1
 */
MutualFundProfileData.prototype['fee12b1'] = undefined;

/**
 * Front Load.
 * @member {Number} frontLoad
 */
MutualFundProfileData.prototype['frontLoad'] = undefined;

/**
 * IRA minimum investment.
 * @member {Number} iraMinInvestment
 */
MutualFundProfileData.prototype['iraMinInvestment'] = undefined;

/**
 * ISIN.
 * @member {String} isin
 */
MutualFundProfileData.prototype['isin'] = undefined;

/**
 * CUSIP.
 * @member {String} cusip
 */
MutualFundProfileData.prototype['cusip'] = undefined;

/**
 * Max redemption fee.
 * @member {Number} maxRedemptionFee
 */
MutualFundProfileData.prototype['maxRedemptionFee'] = undefined;

/**
 * Minimum investment for standard accounts.
 * @member {Number} standardMinInvestment
 */
MutualFundProfileData.prototype['standardMinInvestment'] = undefined;

/**
 * Turnover.
 * @member {Number} turnover
 */
MutualFundProfileData.prototype['turnover'] = undefined;

/**
 * Fund's series ID. This field can be used to group multiple share classes into 1 unique fund.
 * @member {String} seriesId
 */
MutualFundProfileData.prototype['seriesId'] = undefined;

/**
 * Fund's series name.
 * @member {String} seriesName
 */
MutualFundProfileData.prototype['seriesName'] = undefined;

/**
 * Class ID.
 * @member {String} classId
 */
MutualFundProfileData.prototype['classId'] = undefined;

/**
 * Class name.
 * @member {String} className
 */
MutualFundProfileData.prototype['className'] = undefined;

/**
 * SFDR classification for EU funds. Under the new classifications, a fund's strategy will labeled under either Article 6, 8 or 9. Article 6 covers funds which do not integrate any kind of sustainability into the investment process. Article 8, also known as ‘environmental and socially promoting’, applies “… where a financial product promotes, among other characteristics, environmental or social characteristics, or a combination of those characteristics, provided that the companies in which the investments are made follow good governance practices.”. Article 9, also known as ‘products targeting sustainable investments’, covers products targeting bespoke sustainable investments and applies “… where a financial product has sustainable investment as its objective and an index has been designated as a reference benchmark.”
 * @member {String} sfdrClassification
 */
MutualFundProfileData.prototype['sfdrClassification'] = undefined;

/**
 * Fund's currency
 * @member {String} currency
 */
MutualFundProfileData.prototype['currency'] = undefined;






export default MutualFundProfileData;


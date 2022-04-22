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
 * The CompanyProfile model module.
 * @module model/CompanyProfile
 * @version 1.2.14
 */
class CompanyProfile {
    /**
     * Constructs a new <code>CompanyProfile</code>.
     * @alias module:model/CompanyProfile
     */
    constructor() { 
        
        CompanyProfile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyProfile} obj Optional instance to populate.
     * @return {module:model/CompanyProfile} The populated <code>CompanyProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyProfile();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('cusip')) {
                obj['cusip'] = ApiClient.convertToType(data['cusip'], 'String');
            }
            if (data.hasOwnProperty('sedol')) {
                obj['sedol'] = ApiClient.convertToType(data['sedol'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('ggroup')) {
                obj['ggroup'] = ApiClient.convertToType(data['ggroup'], 'String');
            }
            if (data.hasOwnProperty('gind')) {
                obj['gind'] = ApiClient.convertToType(data['gind'], 'String');
            }
            if (data.hasOwnProperty('gsector')) {
                obj['gsector'] = ApiClient.convertToType(data['gsector'], 'String');
            }
            if (data.hasOwnProperty('gsubind')) {
                obj['gsubind'] = ApiClient.convertToType(data['gsubind'], 'String');
            }
            if (data.hasOwnProperty('isin')) {
                obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
            }
            if (data.hasOwnProperty('naicsNationalIndustry')) {
                obj['naicsNationalIndustry'] = ApiClient.convertToType(data['naicsNationalIndustry'], 'String');
            }
            if (data.hasOwnProperty('naics')) {
                obj['naics'] = ApiClient.convertToType(data['naics'], 'String');
            }
            if (data.hasOwnProperty('naicsSector')) {
                obj['naicsSector'] = ApiClient.convertToType(data['naicsSector'], 'String');
            }
            if (data.hasOwnProperty('naicsSubsector')) {
                obj['naicsSubsector'] = ApiClient.convertToType(data['naicsSubsector'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('ticker')) {
                obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
            }
            if (data.hasOwnProperty('weburl')) {
                obj['weburl'] = ApiClient.convertToType(data['weburl'], 'String');
            }
            if (data.hasOwnProperty('ipo')) {
                obj['ipo'] = ApiClient.convertToType(data['ipo'], 'Date');
            }
            if (data.hasOwnProperty('marketCapitalization')) {
                obj['marketCapitalization'] = ApiClient.convertToType(data['marketCapitalization'], 'Number');
            }
            if (data.hasOwnProperty('shareOutstanding')) {
                obj['shareOutstanding'] = ApiClient.convertToType(data['shareOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('employeeTotal')) {
                obj['employeeTotal'] = ApiClient.convertToType(data['employeeTotal'], 'Number');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('finnhubIndustry')) {
                obj['finnhubIndustry'] = ApiClient.convertToType(data['finnhubIndustry'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Address of company's headquarter.
 * @member {String} address
 */
CompanyProfile.prototype['address'] = undefined;

/**
 * City of company's headquarter.
 * @member {String} city
 */
CompanyProfile.prototype['city'] = undefined;

/**
 * Country of company's headquarter.
 * @member {String} country
 */
CompanyProfile.prototype['country'] = undefined;

/**
 * Currency used in company filings.
 * @member {String} currency
 */
CompanyProfile.prototype['currency'] = undefined;

/**
 * CUSIP number.
 * @member {String} cusip
 */
CompanyProfile.prototype['cusip'] = undefined;

/**
 * Sedol number.
 * @member {String} sedol
 */
CompanyProfile.prototype['sedol'] = undefined;

/**
 * Company business summary.
 * @member {String} description
 */
CompanyProfile.prototype['description'] = undefined;

/**
 * Listed exchange.
 * @member {String} exchange
 */
CompanyProfile.prototype['exchange'] = undefined;

/**
 * Industry group.
 * @member {String} ggroup
 */
CompanyProfile.prototype['ggroup'] = undefined;

/**
 * Industry.
 * @member {String} gind
 */
CompanyProfile.prototype['gind'] = undefined;

/**
 * Sector.
 * @member {String} gsector
 */
CompanyProfile.prototype['gsector'] = undefined;

/**
 * Sub-industry.
 * @member {String} gsubind
 */
CompanyProfile.prototype['gsubind'] = undefined;

/**
 * ISIN number.
 * @member {String} isin
 */
CompanyProfile.prototype['isin'] = undefined;

/**
 * NAICS national industry.
 * @member {String} naicsNationalIndustry
 */
CompanyProfile.prototype['naicsNationalIndustry'] = undefined;

/**
 * NAICS industry.
 * @member {String} naics
 */
CompanyProfile.prototype['naics'] = undefined;

/**
 * NAICS sector.
 * @member {String} naicsSector
 */
CompanyProfile.prototype['naicsSector'] = undefined;

/**
 * NAICS subsector.
 * @member {String} naicsSubsector
 */
CompanyProfile.prototype['naicsSubsector'] = undefined;

/**
 * Company name.
 * @member {String} name
 */
CompanyProfile.prototype['name'] = undefined;

/**
 * Company phone number.
 * @member {String} phone
 */
CompanyProfile.prototype['phone'] = undefined;

/**
 * State of company's headquarter.
 * @member {String} state
 */
CompanyProfile.prototype['state'] = undefined;

/**
 * Company symbol/ticker as used on the listed exchange.
 * @member {String} ticker
 */
CompanyProfile.prototype['ticker'] = undefined;

/**
 * Company website.
 * @member {String} weburl
 */
CompanyProfile.prototype['weburl'] = undefined;

/**
 * IPO date.
 * @member {Date} ipo
 */
CompanyProfile.prototype['ipo'] = undefined;

/**
 * Market Capitalization.
 * @member {Number} marketCapitalization
 */
CompanyProfile.prototype['marketCapitalization'] = undefined;

/**
 * Number of oustanding shares.
 * @member {Number} shareOutstanding
 */
CompanyProfile.prototype['shareOutstanding'] = undefined;

/**
 * Number of employee.
 * @member {Number} employeeTotal
 */
CompanyProfile.prototype['employeeTotal'] = undefined;

/**
 * Logo image.
 * @member {String} logo
 */
CompanyProfile.prototype['logo'] = undefined;

/**
 * Finnhub industry classification.
 * @member {String} finnhubIndustry
 */
CompanyProfile.prototype['finnhubIndustry'] = undefined;






export default CompanyProfile;


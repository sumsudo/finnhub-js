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
 * The TranscriptParticipant model module.
 * @module model/TranscriptParticipant
 * @version 1.2.7
 */
class TranscriptParticipant {
    /**
     * Constructs a new <code>TranscriptParticipant</code>.
     * @alias module:model/TranscriptParticipant
     */
    constructor() { 
        
        TranscriptParticipant.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TranscriptParticipant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TranscriptParticipant} obj Optional instance to populate.
     * @return {module:model/TranscriptParticipant} The populated <code>TranscriptParticipant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TranscriptParticipant();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Participant's name
 * @member {String} name
 */
TranscriptParticipant.prototype['name'] = undefined;

/**
 * Participant's description
 * @member {String} description
 */
TranscriptParticipant.prototype['description'] = undefined;

/**
 * Whether the speak is a company's executive or an analyst
 * @member {String} role
 */
TranscriptParticipant.prototype['role'] = undefined;






export default TranscriptParticipant;


"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MutualFundCountryExposureData = _interopRequireDefault(require("./MutualFundCountryExposureData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MutualFundCountryExposure model module.
 * @module model/MutualFundCountryExposure
 * @version 1.2.19
 */
var MutualFundCountryExposure = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MutualFundCountryExposure</code>.
   * @alias module:model/MutualFundCountryExposure
   */
  function MutualFundCountryExposure() {
    _classCallCheck(this, MutualFundCountryExposure);

    MutualFundCountryExposure.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MutualFundCountryExposure, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MutualFundCountryExposure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualFundCountryExposure} obj Optional instance to populate.
     * @return {module:model/MutualFundCountryExposure} The populated <code>MutualFundCountryExposure</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MutualFundCountryExposure();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('countryExposure')) {
          obj['countryExposure'] = _ApiClient["default"].convertToType(data['countryExposure'], [_MutualFundCountryExposureData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return MutualFundCountryExposure;
}();
/**
 * Symbol.
 * @member {String} symbol
 */


MutualFundCountryExposure.prototype['symbol'] = undefined;
/**
 * Array of countries and and exposure levels.
 * @member {Array.<module:model/MutualFundCountryExposureData>} countryExposure
 */

MutualFundCountryExposure.prototype['countryExposure'] = undefined;
var _default = MutualFundCountryExposure;
exports["default"] = _default;
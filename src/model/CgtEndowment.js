/**
 * CGT calculator
 * Capital Gains Tax Calculator
 *
 * OpenAPI spec version: V1.1
 * Contact: name@momentum.co.za
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EndowmentTaxPortfolio', 'model/EndowmentTaxRates', 'model/Money'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EndowmentTaxPortfolio'), require('./EndowmentTaxRates'), require('./Money'));
  } else {
    // Browser globals (root is window)
    if (!root.CgtCalculator) {
      root.CgtCalculator = {};
    }
    root.CgtCalculator.CgtEndowment = factory(root.CgtCalculator.ApiClient, root.CgtCalculator.EndowmentTaxPortfolio, root.CgtCalculator.EndowmentTaxRates, root.CgtCalculator.Money);
  }
}(this, function(ApiClient, EndowmentTaxPortfolio, EndowmentTaxRates, Money) {
  'use strict';




  /**
   * The CgtEndowment model module.
   * @module model/CgtEndowment
   * @version V1.1
   */

  /**
   * Constructs a new <code>CgtEndowment</code>.
   * @alias module:model/CgtEndowment
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CgtEndowment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CgtEndowment} obj Optional instance to populate.
   * @return {module:model/CgtEndowment} The populated <code>CgtEndowment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('second_hand')) {
        obj['second_hand'] = ApiClient.convertToType(data['second_hand'], 'Boolean');
      }
      if (data.hasOwnProperty('tax_profile')) {
        obj['tax_profile'] = EndowmentTaxPortfolio.constructFromObject(data['tax_profile']);
      }
      if (data.hasOwnProperty('tax_rates')) {
        obj['tax_rates'] = EndowmentTaxRates.constructFromObject(data['tax_rates']);
      }
      if (data.hasOwnProperty('accumulated_loss')) {
        obj['accumulated_loss'] = Money.constructFromObject(data['accumulated_loss']);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} second_hand
   */
  exports.prototype['second_hand'] = undefined;
  /**
   * @member {module:model/EndowmentTaxPortfolio} tax_profile
   */
  exports.prototype['tax_profile'] = undefined;
  /**
   * @member {module:model/EndowmentTaxRates} tax_rates
   */
  exports.prototype['tax_rates'] = undefined;
  /**
   * @member {module:model/Money} accumulated_loss
   */
  exports.prototype['accumulated_loss'] = undefined;



  return exports;
}));



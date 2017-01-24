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
    define(['ApiClient', 'model/CgtEndowment', 'model/CgtEndowmentEventsCalcRequest', 'model/CgtEvent', 'model/ForeignExchange'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CgtEndowment'), require('./CgtEndowmentEventsCalcRequest'), require('./CgtEvent'), require('./ForeignExchange'));
  } else {
    // Browser globals (root is window)
    if (!root.CgtCalculator) {
      root.CgtCalculator = {};
    }
    root.CgtCalculator.CgtEndowmentZaEventsCalcRequest = factory(root.CgtCalculator.ApiClient, root.CgtCalculator.CgtEndowment, root.CgtCalculator.CgtEndowmentEventsCalcRequest, root.CgtCalculator.CgtEvent, root.CgtCalculator.ForeignExchange);
  }
}(this, function(ApiClient, CgtEndowment, CgtEndowmentEventsCalcRequest, CgtEvent, ForeignExchange) {
  'use strict';




  /**
   * The CgtEndowmentZaEventsCalcRequest model module.
   * @module model/CgtEndowmentZaEventsCalcRequest
   * @version V1.1
   */

  /**
   * Constructs a new <code>CgtEndowmentZaEventsCalcRequest</code>.
   * @alias module:model/CgtEndowmentZaEventsCalcRequest
   * @class
   * @extends module:model/CgtEndowmentEventsCalcRequest
   */
  var exports = function() {
    var _this = this;
    CgtEndowmentEventsCalcRequest.call(_this);
  };

  /**
   * Constructs a <code>CgtEndowmentZaEventsCalcRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CgtEndowmentZaEventsCalcRequest} obj Optional instance to populate.
   * @return {module:model/CgtEndowmentZaEventsCalcRequest} The populated <code>CgtEndowmentZaEventsCalcRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      CgtEndowmentEventsCalcRequest.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(CgtEndowmentEventsCalcRequest.prototype);
  exports.prototype.constructor = exports;




  return exports;
}));



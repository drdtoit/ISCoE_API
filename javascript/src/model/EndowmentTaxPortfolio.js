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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CgtCalculator) {
      root.CgtCalculator = {};
    }
    root.CgtCalculator.EndowmentTaxPortfolio = factory(root.CgtCalculator.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class EndowmentTaxPortfolio.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "ctp"
     * @const
     */
    "ctp": "ctp",
    /**
     * value: "itp"
     * @const
     */
    "itp": "itp",
    /**
     * value: "utp"
     * @const
     */
    "utp": "utp",
    /**
     * value: "rtp"
     * @const
     */
    "rtp": "rtp"  };

  /**
   * Returns a <code>EndowmentTaxPortfolio</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/EndowmentTaxPortfolio} The enum <code>EndowmentTaxPortfolio</code> value.
   */
  exports.constructFromObject = function(object) {
    return exports[object];
  }

  return exports;
}));


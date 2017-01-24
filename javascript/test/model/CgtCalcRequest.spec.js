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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CgtCalculator);
  }
}(this, function(expect, CgtCalculator) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CgtCalculator.CgtCalcRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CgtCalcRequest', function() {
    it('should create an instance of CgtCalcRequest', function() {
      // uncomment below and update the code to test CgtCalcRequest
      //var instane = new CgtCalculator.CgtCalcRequest();
      //expect(instance).to.be.a(CgtCalculator.CgtCalcRequest);
    });

    it('should have the property funcTaxFx (base name: "func_tax_fx")', function() {
      // uncomment below and update the code to test the property funcTaxFx
      //var instane = new CgtCalculator.CgtCalcRequest();
      //expect(instance).to.be();
    });

  });

}));

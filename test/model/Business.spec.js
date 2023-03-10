/*
 * KAPED PARTNER API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.37
 *
 * Do not edit the class manually.
 *
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
    factory(root.expect, root.KapedPartnerApi);
  }
}(this, function(expect, KapedPartnerApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Business', function() {
      beforeEach(function() {
        instance = KapedPartnerApi.Business;
      });

      it('should create an instance of Business', function() {
        // TODO: update the code to test Business
        expect(instance).to.be.a('object');
      });

      it('should have the property LLC', function() {
        expect(instance).to.have.property('LLC');
        expect(instance.LLC).to.be("LLC");
      });

      it('should have the property corporation', function() {
        expect(instance).to.have.property('corporation');
        expect(instance.corporation).to.be("Corporation");
      });

      it('should have the property nonProfit', function() {
        expect(instance).to.have.property('nonProfit');
        expect(instance.nonProfit).to.be("Non Profit");
      });

      it('should have the property soleProprietor', function() {
        expect(instance).to.have.property('soleProprietor');
        expect(instance.soleProprietor).to.be("Sole Proprietor");
      });

      it('should have the property government', function() {
        expect(instance).to.have.property('government');
        expect(instance.government).to.be("Government");
      });

    });
  });

}));

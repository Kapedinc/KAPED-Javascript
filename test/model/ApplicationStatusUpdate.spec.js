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
    describe('ApplicationStatusUpdate', function() {
      beforeEach(function() {
        instance = new KapedPartnerApi.ApplicationStatusUpdate();
      });

      it('should create an instance of ApplicationStatusUpdate', function() {
        // TODO: update the code to test ApplicationStatusUpdate
        expect(instance).to.be.a(KapedPartnerApi.ApplicationStatusUpdate);
      });

      it('should have the property applicationID (base name: "applicationID")', function() {
        // TODO: update the code to test the property applicationID
        expect(instance).to.have.property('applicationID');
        // expect(instance.applicationID).to.be(expectedValueLiteral);
      });

      it('should have the property sentToUnderwriting (base name: "sentToUnderwriting")', function() {
        // TODO: update the code to test the property sentToUnderwriting
        expect(instance).to.have.property('sentToUnderwriting');
        // expect(instance.sentToUnderwriting).to.be(expectedValueLiteral);
      });

      it('should have the property reject (base name: "reject")', function() {
        // TODO: update the code to test the property reject
        expect(instance).to.have.property('reject');
        // expect(instance.reject).to.be(expectedValueLiteral);
      });

    });
  });

}));

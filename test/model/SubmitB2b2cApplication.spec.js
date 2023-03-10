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
    describe('SubmitB2b2cApplication', function() {
      beforeEach(function() {
        instance = new KapedPartnerApi.SubmitB2b2cApplication();
      });

      it('should create an instance of SubmitB2b2cApplication', function() {
        // TODO: update the code to test SubmitB2b2cApplication
        expect(instance).to.be.a(KapedPartnerApi.SubmitB2b2cApplication);
      });

      it('should have the property applicationType (base name: "applicationType")', function() {
        // TODO: update the code to test the property applicationType
        expect(instance).to.have.property('applicationType');
        // expect(instance.applicationType).to.be(expectedValueLiteral);
      });

      it('should have the property customerCurrentCity (base name: "customerCurrentCity")', function() {
        // TODO: update the code to test the property customerCurrentCity
        expect(instance).to.have.property('customerCurrentCity');
        // expect(instance.customerCurrentCity).to.be(expectedValueLiteral);
      });

      it('should have the property customerCurrentStreetAddress (base name: "customerCurrentStreetAddress")', function() {
        // TODO: update the code to test the property customerCurrentStreetAddress
        expect(instance).to.have.property('customerCurrentStreetAddress');
        // expect(instance.customerCurrentStreetAddress).to.be(expectedValueLiteral);
      });

      it('should have the property customerFirstName (base name: "customerFirstName")', function() {
        // TODO: update the code to test the property customerFirstName
        expect(instance).to.have.property('customerFirstName');
        // expect(instance.customerFirstName).to.be(expectedValueLiteral);
      });

      it('should have the property customerMiddleName (base name: "customerMiddleName")', function() {
        // TODO: update the code to test the property customerMiddleName
        expect(instance).to.have.property('customerMiddleName');
        // expect(instance.customerMiddleName).to.be(expectedValueLiteral);
      });

      it('should have the property customerLastName (base name: "customerLastName")', function() {
        // TODO: update the code to test the property customerLastName
        expect(instance).to.have.property('customerLastName');
        // expect(instance.customerLastName).to.be(expectedValueLiteral);
      });

      it('should have the property customerMaidenName (base name: "customerMaidenName")', function() {
        // TODO: update the code to test the property customerMaidenName
        expect(instance).to.have.property('customerMaidenName');
        // expect(instance.customerMaidenName).to.be(expectedValueLiteral);
      });

      it('should have the property customerDateOfBirth (base name: "customerDateOfBirth")', function() {
        // TODO: update the code to test the property customerDateOfBirth
        expect(instance).to.have.property('customerDateOfBirth');
        // expect(instance.customerDateOfBirth).to.be(expectedValueLiteral);
      });

      it('should have the property customerSSN (base name: "customerSSN")', function() {
        // TODO: update the code to test the property customerSSN
        expect(instance).to.have.property('customerSSN');
        // expect(instance.customerSSN).to.be(expectedValueLiteral);
      });

      it('should have the property customerGender (base name: "customerGender")', function() {
        // TODO: update the code to test the property customerGender
        expect(instance).to.have.property('customerGender');
        // expect(instance.customerGender).to.be(expectedValueLiteral);
      });

      it('should have the property customerEmail (base name: "customerEmail")', function() {
        // TODO: update the code to test the property customerEmail
        expect(instance).to.have.property('customerEmail');
        // expect(instance.customerEmail).to.be(expectedValueLiteral);
      });

      it('should have the property customerDrivingLicenseNumber (base name: "customerDrivingLicenseNumber")', function() {
        // TODO: update the code to test the property customerDrivingLicenseNumber
        expect(instance).to.have.property('customerDrivingLicenseNumber');
        // expect(instance.customerDrivingLicenseNumber).to.be(expectedValueLiteral);
      });

      it('should have the property customerCurrentState (base name: "customerCurrentState")', function() {
        // TODO: update the code to test the property customerCurrentState
        expect(instance).to.have.property('customerCurrentState');
        // expect(instance.customerCurrentState).to.be(expectedValueLiteral);
      });

      it('should have the property customerCurrentZip (base name: "customerCurrentZip")', function() {
        // TODO: update the code to test the property customerCurrentZip
        expect(instance).to.have.property('customerCurrentZip');
        // expect(instance.customerCurrentZip).to.be(expectedValueLiteral);
      });

      it('should have the property customerCurrentYears (base name: "customerCurrentYears")', function() {
        // TODO: update the code to test the property customerCurrentYears
        expect(instance).to.have.property('customerCurrentYears');
        // expect(instance.customerCurrentYears).to.be(expectedValueLiteral);
      });

      it('should have the property customerPersonalPhone (base name: "customerPersonalPhone")', function() {
        // TODO: update the code to test the property customerPersonalPhone
        expect(instance).to.have.property('customerPersonalPhone');
        // expect(instance.customerPersonalPhone).to.be(expectedValueLiteral);
      });

      it('should have the property customerHomeType (base name: "customerHomeType")', function() {
        // TODO: update the code to test the property customerHomeType
        expect(instance).to.have.property('customerHomeType');
        // expect(instance.customerHomeType).to.be(expectedValueLiteral);
      });

      it('should have the property customerEmployerName (base name: "customerEmployerName")', function() {
        // TODO: update the code to test the property customerEmployerName
        expect(instance).to.have.property('customerEmployerName');
        // expect(instance.customerEmployerName).to.be(expectedValueLiteral);
      });

      it('should have the property customerPosition (base name: "customerPosition")', function() {
        // TODO: update the code to test the property customerPosition
        expect(instance).to.have.property('customerPosition');
        // expect(instance.customerPosition).to.be(expectedValueLiteral);
      });

      it('should have the property customerBusinessPhone (base name: "customerBusinessPhone")', function() {
        // TODO: update the code to test the property customerBusinessPhone
        expect(instance).to.have.property('customerBusinessPhone');
        // expect(instance.customerBusinessPhone).to.be(expectedValueLiteral);
      });

      it('should have the property customerYearsInJob (base name: "customerYearsInJob")', function() {
        // TODO: update the code to test the property customerYearsInJob
        expect(instance).to.have.property('customerYearsInJob');
        // expect(instance.customerYearsInJob).to.be(expectedValueLiteral);
      });

      it('should have the property customerMonthlyIncome (base name: "customerMonthlyIncome")', function() {
        // TODO: update the code to test the property customerMonthlyIncome
        expect(instance).to.have.property('customerMonthlyIncome');
        // expect(instance.customerMonthlyIncome).to.be(expectedValueLiteral);
      });

      it('should have the property customerOtherIncome (base name: "customerOtherIncome")', function() {
        // TODO: update the code to test the property customerOtherIncome
        expect(instance).to.have.property('customerOtherIncome');
        // expect(instance.customerOtherIncome).to.be(expectedValueLiteral);
      });

      it('should have the property customerSourceOtherIncome (base name: "customerSourceOtherIncome")', function() {
        // TODO: update the code to test the property customerSourceOtherIncome
        expect(instance).to.have.property('customerSourceOtherIncome');
        // expect(instance.customerSourceOtherIncome).to.be(expectedValueLiteral);
      });

      it('should have the property customerHaveInsurance (base name: "customerHaveInsurance")', function() {
        // TODO: update the code to test the property customerHaveInsurance
        expect(instance).to.have.property('customerHaveInsurance');
        // expect(instance.customerHaveInsurance).to.be(expectedValueLiteral);
      });

      it('should have the property customerTermsConditions (base name: "customerTermsConditions")', function() {
        // TODO: update the code to test the property customerTermsConditions
        expect(instance).to.have.property('customerTermsConditions');
        // expect(instance.customerTermsConditions).to.be(expectedValueLiteral);
      });

      it('should have the property initialCreditLimit (base name: "initialCreditLimit")', function() {
        // TODO: update the code to test the property initialCreditLimit
        expect(instance).to.have.property('initialCreditLimit');
        // expect(instance.initialCreditLimit).to.be(expectedValueLiteral);
      });

      it('should have the property dLFront (base name: "DL_Front")', function() {
        // TODO: update the code to test the property dLFront
        expect(instance).to.have.property('dLFront');
        // expect(instance.dLFront).to.be(expectedValueLiteral);
      });

      it('should have the property dLBack (base name: "DL_Back")', function() {
        // TODO: update the code to test the property dLBack
        expect(instance).to.have.property('dLBack');
        // expect(instance.dLBack).to.be(expectedValueLiteral);
      });

    });
  });

}));

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
    describe('SubmitApplication', function() {
      beforeEach(function() {
        instance = new KapedPartnerApi.SubmitApplication();
      });

      it('should create an instance of SubmitApplication', function() {
        // TODO: update the code to test SubmitApplication
        expect(instance).to.be.a(KapedPartnerApi.SubmitApplication);
      });

      it('should have the property applicationType (base name: "applicationType")', function() {
        // TODO: update the code to test the property applicationType
        expect(instance).to.have.property('applicationType');
        // expect(instance.applicationType).to.be(expectedValueLiteral);
      });

      it('should have the property partnerBusinessName (base name: "partnerBusinessName")', function() {
        // TODO: update the code to test the property partnerBusinessName
        expect(instance).to.have.property('partnerBusinessName');
        // expect(instance.partnerBusinessName).to.be(expectedValueLiteral);
      });

      it('should have the property partnerTaxID (base name: "partnerTaxID")', function() {
        // TODO: update the code to test the property partnerTaxID
        expect(instance).to.have.property('partnerTaxID');
        // expect(instance.partnerTaxID).to.be(expectedValueLiteral);
      });

      it('should have the property partnerDateIncorporated (base name: "partnerDateIncorporated")', function() {
        // TODO: update the code to test the property partnerDateIncorporated
        expect(instance).to.have.property('partnerDateIncorporated');
        // expect(instance.partnerDateIncorporated).to.be(expectedValueLiteral);
      });

      it('should have the property partnerBusinessType (base name: "partnerBusinessType")', function() {
        // TODO: update the code to test the property partnerBusinessType
        expect(instance).to.have.property('partnerBusinessType');
        // expect(instance.partnerBusinessType).to.be(expectedValueLiteral);
      });

      it('should have the property partnerBusinessAddress (base name: "partnerBusinessAddress")', function() {
        // TODO: update the code to test the property partnerBusinessAddress
        expect(instance).to.have.property('partnerBusinessAddress');
        // expect(instance.partnerBusinessAddress).to.be(expectedValueLiteral);
      });

      it('should have the property partnerStreet2 (base name: "partnerStreet2")', function() {
        // TODO: update the code to test the property partnerStreet2
        expect(instance).to.have.property('partnerStreet2');
        // expect(instance.partnerStreet2).to.be(expectedValueLiteral);
      });

      it('should have the property partnerGeneralInformationCity (base name: "partnerGeneralInformationCity")', function() {
        // TODO: update the code to test the property partnerGeneralInformationCity
        expect(instance).to.have.property('partnerGeneralInformationCity');
        // expect(instance.partnerGeneralInformationCity).to.be(expectedValueLiteral);
      });

      it('should have the property partnerGeneralInformationState (base name: "partnerGeneralInformationState")', function() {
        // TODO: update the code to test the property partnerGeneralInformationState
        expect(instance).to.have.property('partnerGeneralInformationState');
        // expect(instance.partnerGeneralInformationState).to.be(expectedValueLiteral);
      });

      it('should have the property partnerGeneralInformationZip (base name: "partnerGeneralInformationZip")', function() {
        // TODO: update the code to test the property partnerGeneralInformationZip
        expect(instance).to.have.property('partnerGeneralInformationZip');
        // expect(instance.partnerGeneralInformationZip).to.be(expectedValueLiteral);
      });

      it('should have the property partnerWebsite (base name: "partnerWebsite")', function() {
        // TODO: update the code to test the property partnerWebsite
        expect(instance).to.have.property('partnerWebsite');
        // expect(instance.partnerWebsite).to.be(expectedValueLiteral);
      });

      it('should have the property partnerSIC (base name: "partnerSIC")', function() {
        // TODO: update the code to test the property partnerSIC
        expect(instance).to.have.property('partnerSIC');
        // expect(instance.partnerSIC).to.be(expectedValueLiteral);
      });

      it('should have the property partnerOwnership (base name: "partnerOwnership")', function() {
        // TODO: update the code to test the property partnerOwnership
        expect(instance).to.have.property('partnerOwnership');
        // expect(instance.partnerOwnership).to.be(expectedValueLiteral);
      });

      it('should have the property partnerBusinessDescription (base name: "partnerBusinessDescription")', function() {
        // TODO: update the code to test the property partnerBusinessDescription
        expect(instance).to.have.property('partnerBusinessDescription');
        // expect(instance.partnerBusinessDescription).to.be(expectedValueLiteral);
      });

      it('should have the property partnerBusinessPhone (base name: "partnerBusinessPhone")', function() {
        // TODO: update the code to test the property partnerBusinessPhone
        expect(instance).to.have.property('partnerBusinessPhone');
        // expect(instance.partnerBusinessPhone).to.be(expectedValueLiteral);
      });

      it('should have the property partnerCustomerSupportEmail (base name: "partnerCustomerSupportEmail")', function() {
        // TODO: update the code to test the property partnerCustomerSupportEmail
        expect(instance).to.have.property('partnerCustomerSupportEmail');
        // expect(instance.partnerCustomerSupportEmail).to.be(expectedValueLiteral);
      });

      it('should have the property partnerBusinessFax (base name: "partnerBusinessFax")', function() {
        // TODO: update the code to test the property partnerBusinessFax
        expect(instance).to.have.property('partnerBusinessFax');
        // expect(instance.partnerBusinessFax).to.be(expectedValueLiteral);
      });

      it('should have the property partnerInitialCreditLimit (base name: "partnerInitialCreditLimit")', function() {
        // TODO: update the code to test the property partnerInitialCreditLimit
        expect(instance).to.have.property('partnerInitialCreditLimit');
        // expect(instance.partnerInitialCreditLimit).to.be(expectedValueLiteral);
      });

      it('should have the property partnerCustomerInformationFirstName (base name: "partnerCustomerInformationFirstName")', function() {
        // TODO: update the code to test the property partnerCustomerInformationFirstName
        expect(instance).to.have.property('partnerCustomerInformationFirstName');
        // expect(instance.partnerCustomerInformationFirstName).to.be(expectedValueLiteral);
      });

      it('should have the property partnerCustomerInformationLastName (base name: "partnerCustomerInformationLastName")', function() {
        // TODO: update the code to test the property partnerCustomerInformationLastName
        expect(instance).to.have.property('partnerCustomerInformationLastName');
        // expect(instance.partnerCustomerInformationLastName).to.be(expectedValueLiteral);
      });

      it('should have the property partnerCustomerInformationHomeAddress (base name: "partnerCustomerInformationHomeAddress")', function() {
        // TODO: update the code to test the property partnerCustomerInformationHomeAddress
        expect(instance).to.have.property('partnerCustomerInformationHomeAddress');
        // expect(instance.partnerCustomerInformationHomeAddress).to.be(expectedValueLiteral);
      });

      it('should have the property partnerCustomerInformationHomeStreet2 (base name: "partnerCustomerInformationHomeStreet2")', function() {
        // TODO: update the code to test the property partnerCustomerInformationHomeStreet2
        expect(instance).to.have.property('partnerCustomerInformationHomeStreet2');
        // expect(instance.partnerCustomerInformationHomeStreet2).to.be(expectedValueLiteral);
      });

      it('should have the property partnerCustomerInformationState (base name: "partnerCustomerInformationState")', function() {
        // TODO: update the code to test the property partnerCustomerInformationState
        expect(instance).to.have.property('partnerCustomerInformationState');
        // expect(instance.partnerCustomerInformationState).to.be(expectedValueLiteral);
      });

      it('should have the property partnerCustomerInformationCity (base name: "partnerCustomerInformationCity")', function() {
        // TODO: update the code to test the property partnerCustomerInformationCity
        expect(instance).to.have.property('partnerCustomerInformationCity');
        // expect(instance.partnerCustomerInformationCity).to.be(expectedValueLiteral);
      });

      it('should have the property partnercustomerInformationZip (base name: "partnercustomerInformationZip")', function() {
        // TODO: update the code to test the property partnercustomerInformationZip
        expect(instance).to.have.property('partnercustomerInformationZip');
        // expect(instance.partnercustomerInformationZip).to.be(expectedValueLiteral);
      });

      it('should have the property partnerCustomerInformationPercentOwnership (base name: "partnerCustomerInformationPercentOwnership")', function() {
        // TODO: update the code to test the property partnerCustomerInformationPercentOwnership
        expect(instance).to.have.property('partnerCustomerInformationPercentOwnership');
        // expect(instance.partnerCustomerInformationPercentOwnership).to.be(expectedValueLiteral);
      });

      it('should have the property partnerCustomerInformationDrivingLicenseNumber (base name: "partnerCustomerInformationDrivingLicenseNumber")', function() {
        // TODO: update the code to test the property partnerCustomerInformationDrivingLicenseNumber
        expect(instance).to.have.property('partnerCustomerInformationDrivingLicenseNumber');
        // expect(instance.partnerCustomerInformationDrivingLicenseNumber).to.be(expectedValueLiteral);
      });

      it('should have the property partnerCustomerInformationLicenseDate (base name: "partnerCustomerInformationLicenseDate")', function() {
        // TODO: update the code to test the property partnerCustomerInformationLicenseDate
        expect(instance).to.have.property('partnerCustomerInformationLicenseDate');
        // expect(instance.partnerCustomerInformationLicenseDate).to.be(expectedValueLiteral);
      });

      it('should have the property partnerCustomerInformationDOB (base name: "partnerCustomerInformationDOB")', function() {
        // TODO: update the code to test the property partnerCustomerInformationDOB
        expect(instance).to.have.property('partnerCustomerInformationDOB');
        // expect(instance.partnerCustomerInformationDOB).to.be(expectedValueLiteral);
      });

      it('should have the property partnerCustomerInformationSSN (base name: "partnerCustomerInformationSSN")', function() {
        // TODO: update the code to test the property partnerCustomerInformationSSN
        expect(instance).to.have.property('partnerCustomerInformationSSN');
        // expect(instance.partnerCustomerInformationSSN).to.be(expectedValueLiteral);
      });

      it('should have the property partnerTermsConditions (base name: "partnerTermsConditions")', function() {
        // TODO: update the code to test the property partnerTermsConditions
        expect(instance).to.have.property('partnerTermsConditions');
        // expect(instance.partnerTermsConditions).to.be(expectedValueLiteral);
      });

      it('should have the property haveInsurance (base name: "haveInsurance")', function() {
        // TODO: update the code to test the property haveInsurance
        expect(instance).to.have.property('haveInsurance');
        // expect(instance.haveInsurance).to.be(expectedValueLiteral);
      });

      it('should have the property gender (base name: "gender")', function() {
        // TODO: update the code to test the property gender
        expect(instance).to.have.property('gender');
        // expect(instance.gender).to.be(expectedValueLiteral);
      });

      it('should have the property EIN (base name: "EIN")', function() {
        // TODO: update the code to test the property EIN
        expect(instance).to.have.property('EIN');
        // expect(instance.EIN).to.be(expectedValueLiteral);
      });

      it('should have the property articles (base name: "Articles")', function() {
        // TODO: update the code to test the property articles
        expect(instance).to.have.property('articles');
        // expect(instance.articles).to.be(expectedValueLiteral);
      });

      it('should have the property sSNCard (base name: "SSNCard")', function() {
        // TODO: update the code to test the property sSNCard
        expect(instance).to.have.property('sSNCard');
        // expect(instance.sSNCard).to.be(expectedValueLiteral);
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
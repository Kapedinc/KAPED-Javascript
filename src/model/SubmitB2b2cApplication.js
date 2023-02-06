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
import {ApiClient} from '../ApiClient';
import {Gender} from './Gender';
import {States} from './States';

/**
 * The SubmitB2b2cApplication model module.
 * @module model/SubmitB2b2cApplication
 * @version 1.2.0
 */
export class SubmitB2b2cApplication {
  /**
   * Constructs a new <code>SubmitB2b2cApplication</code>.
   * @alias module:model/SubmitB2b2cApplication
   * @class
   * @param applicationType {module:model/SubmitB2b2cApplication.ApplicationTypeEnum} B2B2C
   * @param customerCurrentCity {String} 
   * @param customerCurrentStreetAddress {String} 
   * @param customerFirstName {String} 
   * @param customerMiddleName {String} 
   * @param customerLastName {String} 
   * @param customerDateOfBirth {String} YYYY-MM-DD
   * @param customerSSN {Number} 
   * @param customerGender {module:model/Gender} 
   * @param customerEmail {String} 
   * @param customerDrivingLicenseNumber {Number} 
   * @param customerCurrentState {module:model/States} 
   * @param customerCurrentZip {Number} 
   * @param customerCurrentYears {Number} 
   * @param customerPersonalPhone {Number} 
   * @param customerHomeType {module:model/SubmitB2b2cApplication.CustomerHomeTypeEnum} Select Home Type
   * @param customerEmployerName {String} 
   * @param customerPosition {String} 
   * @param customerBusinessPhone {Number} 
   * @param customerYearsInJob {Number} 
   * @param customerMonthlyIncome {Number} 
   * @param customerHaveInsurance {Boolean} 
   * @param customerTermsConditions {Boolean} 
   * @param initialCreditLimit {Number} 
   * @param dLFront {Array.<Blob>} 
   * @param dLBack {Array.<Blob>} 
   */
  constructor(applicationType, customerCurrentCity, customerCurrentStreetAddress, customerFirstName, customerMiddleName, customerLastName, customerDateOfBirth, customerSSN, customerGender, customerEmail, customerDrivingLicenseNumber, customerCurrentState, customerCurrentZip, customerCurrentYears, customerPersonalPhone, customerHomeType, customerEmployerName, customerPosition, customerBusinessPhone, customerYearsInJob, customerMonthlyIncome, customerHaveInsurance, customerTermsConditions, initialCreditLimit, dLFront, dLBack) {
    this.applicationType = applicationType;
    this.customerCurrentCity = customerCurrentCity;
    this.customerCurrentStreetAddress = customerCurrentStreetAddress;
    this.customerFirstName = customerFirstName;
    this.customerMiddleName = customerMiddleName;
    this.customerLastName = customerLastName;
    this.customerDateOfBirth = customerDateOfBirth;
    this.customerSSN = customerSSN;
    this.customerGender = customerGender;
    this.customerEmail = customerEmail;
    this.customerDrivingLicenseNumber = customerDrivingLicenseNumber;
    this.customerCurrentState = customerCurrentState;
    this.customerCurrentZip = customerCurrentZip;
    this.customerCurrentYears = customerCurrentYears;
    this.customerPersonalPhone = customerPersonalPhone;
    this.customerHomeType = customerHomeType;
    this.customerEmployerName = customerEmployerName;
    this.customerPosition = customerPosition;
    this.customerBusinessPhone = customerBusinessPhone;
    this.customerYearsInJob = customerYearsInJob;
    this.customerMonthlyIncome = customerMonthlyIncome;
    this.customerHaveInsurance = customerHaveInsurance;
    this.customerTermsConditions = customerTermsConditions;
    this.initialCreditLimit = initialCreditLimit;
    this.dLFront = dLFront;
    this.dLBack = dLBack;
  }

  /**
   * Constructs a <code>SubmitB2b2cApplication</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubmitB2b2cApplication} obj Optional instance to populate.
   * @return {module:model/SubmitB2b2cApplication} The populated <code>SubmitB2b2cApplication</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubmitB2b2cApplication();
      if (data.hasOwnProperty('applicationType'))
        obj.applicationType = ApiClient.convertToType(data['applicationType'], 'String');
      if (data.hasOwnProperty('customerCurrentCity'))
        obj.customerCurrentCity = ApiClient.convertToType(data['customerCurrentCity'], 'String');
      if (data.hasOwnProperty('customerCurrentStreetAddress'))
        obj.customerCurrentStreetAddress = ApiClient.convertToType(data['customerCurrentStreetAddress'], 'String');
      if (data.hasOwnProperty('customerFirstName'))
        obj.customerFirstName = ApiClient.convertToType(data['customerFirstName'], 'String');
      if (data.hasOwnProperty('customerMiddleName'))
        obj.customerMiddleName = ApiClient.convertToType(data['customerMiddleName'], 'String');
      if (data.hasOwnProperty('customerLastName'))
        obj.customerLastName = ApiClient.convertToType(data['customerLastName'], 'String');
      if (data.hasOwnProperty('customerMaidenName'))
        obj.customerMaidenName = ApiClient.convertToType(data['customerMaidenName'], 'String');
      if (data.hasOwnProperty('customerDateOfBirth'))
        obj.customerDateOfBirth = ApiClient.convertToType(data['customerDateOfBirth'], 'String');
      if (data.hasOwnProperty('customerSSN'))
        obj.customerSSN = ApiClient.convertToType(data['customerSSN'], 'Number');
      if (data.hasOwnProperty('customerGender'))
        obj.customerGender = Gender.constructFromObject(data['customerGender']);
      if (data.hasOwnProperty('customerEmail'))
        obj.customerEmail = ApiClient.convertToType(data['customerEmail'], 'String');
      if (data.hasOwnProperty('customerDrivingLicenseNumber'))
        obj.customerDrivingLicenseNumber = ApiClient.convertToType(data['customerDrivingLicenseNumber'], 'Number');
      if (data.hasOwnProperty('customerCurrentState'))
        obj.customerCurrentState = States.constructFromObject(data['customerCurrentState']);
      if (data.hasOwnProperty('customerCurrentZip'))
        obj.customerCurrentZip = ApiClient.convertToType(data['customerCurrentZip'], 'Number');
      if (data.hasOwnProperty('customerCurrentYears'))
        obj.customerCurrentYears = ApiClient.convertToType(data['customerCurrentYears'], 'Number');
      if (data.hasOwnProperty('customerPersonalPhone'))
        obj.customerPersonalPhone = ApiClient.convertToType(data['customerPersonalPhone'], 'Number');
      if (data.hasOwnProperty('customerHomeType'))
        obj.customerHomeType = ApiClient.convertToType(data['customerHomeType'], 'String');
      if (data.hasOwnProperty('customerEmployerName'))
        obj.customerEmployerName = ApiClient.convertToType(data['customerEmployerName'], 'String');
      if (data.hasOwnProperty('customerPosition'))
        obj.customerPosition = ApiClient.convertToType(data['customerPosition'], 'String');
      if (data.hasOwnProperty('customerBusinessPhone'))
        obj.customerBusinessPhone = ApiClient.convertToType(data['customerBusinessPhone'], 'Number');
      if (data.hasOwnProperty('customerYearsInJob'))
        obj.customerYearsInJob = ApiClient.convertToType(data['customerYearsInJob'], 'Number');
      if (data.hasOwnProperty('customerMonthlyIncome'))
        obj.customerMonthlyIncome = ApiClient.convertToType(data['customerMonthlyIncome'], 'Number');
      if (data.hasOwnProperty('customerOtherIncome'))
        obj.customerOtherIncome = ApiClient.convertToType(data['customerOtherIncome'], 'Number');
      if (data.hasOwnProperty('customerSourceOtherIncome'))
        obj.customerSourceOtherIncome = ApiClient.convertToType(data['customerSourceOtherIncome'], 'String');
      if (data.hasOwnProperty('customerHaveInsurance'))
        obj.customerHaveInsurance = ApiClient.convertToType(data['customerHaveInsurance'], 'Boolean');
      if (data.hasOwnProperty('customerTermsConditions'))
        obj.customerTermsConditions = ApiClient.convertToType(data['customerTermsConditions'], 'Boolean');
      if (data.hasOwnProperty('initialCreditLimit'))
        obj.initialCreditLimit = ApiClient.convertToType(data['initialCreditLimit'], 'Number');
      if (data.hasOwnProperty('DL_Front'))
        obj.dLFront = ApiClient.convertToType(data['DL_Front'], ['Blob']);
      if (data.hasOwnProperty('DL_Back'))
        obj.dLBack = ApiClient.convertToType(data['DL_Back'], ['Blob']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>applicationType</code> property.
 * @enum {String}
 * @readonly
 */
SubmitB2b2cApplication.ApplicationTypeEnum = {
  /**
   * value: "B2B2C"
   * @const
   */
  b2B2C: "B2B2C"
};
/**
 * B2B2C
 * @member {module:model/SubmitB2b2cApplication.ApplicationTypeEnum} applicationType
 */
SubmitB2b2cApplication.prototype.applicationType = undefined;

/**
 * @member {String} customerCurrentCity
 */
SubmitB2b2cApplication.prototype.customerCurrentCity = undefined;

/**
 * @member {String} customerCurrentStreetAddress
 */
SubmitB2b2cApplication.prototype.customerCurrentStreetAddress = undefined;

/**
 * @member {String} customerFirstName
 */
SubmitB2b2cApplication.prototype.customerFirstName = undefined;

/**
 * @member {String} customerMiddleName
 */
SubmitB2b2cApplication.prototype.customerMiddleName = undefined;

/**
 * @member {String} customerLastName
 */
SubmitB2b2cApplication.prototype.customerLastName = undefined;

/**
 * @member {String} customerMaidenName
 */
SubmitB2b2cApplication.prototype.customerMaidenName = undefined;

/**
 * YYYY-MM-DD
 * @member {String} customerDateOfBirth
 */
SubmitB2b2cApplication.prototype.customerDateOfBirth = undefined;

/**
 * @member {Number} customerSSN
 */
SubmitB2b2cApplication.prototype.customerSSN = undefined;

/**
 * @member {module:model/Gender} customerGender
 */
SubmitB2b2cApplication.prototype.customerGender = undefined;

/**
 * @member {String} customerEmail
 */
SubmitB2b2cApplication.prototype.customerEmail = undefined;

/**
 * @member {Number} customerDrivingLicenseNumber
 */
SubmitB2b2cApplication.prototype.customerDrivingLicenseNumber = undefined;

/**
 * @member {module:model/States} customerCurrentState
 */
SubmitB2b2cApplication.prototype.customerCurrentState = undefined;

/**
 * @member {Number} customerCurrentZip
 */
SubmitB2b2cApplication.prototype.customerCurrentZip = undefined;

/**
 * @member {Number} customerCurrentYears
 */
SubmitB2b2cApplication.prototype.customerCurrentYears = undefined;

/**
 * @member {Number} customerPersonalPhone
 */
SubmitB2b2cApplication.prototype.customerPersonalPhone = undefined;

/**
 * Allowed values for the <code>customerHomeType</code> property.
 * @enum {String}
 * @readonly
 */
SubmitB2b2cApplication.CustomerHomeTypeEnum = {
  /**
   * value: "Own"
   * @const
   */
  own: "Own",

  /**
   * value: "Rent"
   * @const
   */
  rent: "Rent"
};
/**
 * Select Home Type
 * @member {module:model/SubmitB2b2cApplication.CustomerHomeTypeEnum} customerHomeType
 */
SubmitB2b2cApplication.prototype.customerHomeType = undefined;

/**
 * @member {String} customerEmployerName
 */
SubmitB2b2cApplication.prototype.customerEmployerName = undefined;

/**
 * @member {String} customerPosition
 */
SubmitB2b2cApplication.prototype.customerPosition = undefined;

/**
 * @member {Number} customerBusinessPhone
 */
SubmitB2b2cApplication.prototype.customerBusinessPhone = undefined;

/**
 * @member {Number} customerYearsInJob
 */
SubmitB2b2cApplication.prototype.customerYearsInJob = undefined;

/**
 * @member {Number} customerMonthlyIncome
 */
SubmitB2b2cApplication.prototype.customerMonthlyIncome = undefined;

/**
 * @member {Number} customerOtherIncome
 */
SubmitB2b2cApplication.prototype.customerOtherIncome = undefined;

/**
 * @member {String} customerSourceOtherIncome
 */
SubmitB2b2cApplication.prototype.customerSourceOtherIncome = undefined;

/**
 * @member {Boolean} customerHaveInsurance
 */
SubmitB2b2cApplication.prototype.customerHaveInsurance = undefined;

/**
 * @member {Boolean} customerTermsConditions
 */
SubmitB2b2cApplication.prototype.customerTermsConditions = undefined;

/**
 * @member {Number} initialCreditLimit
 */
SubmitB2b2cApplication.prototype.initialCreditLimit = undefined;

/**
 * @member {Array.<Blob>} dLFront
 */
SubmitB2b2cApplication.prototype.dLFront = undefined;

/**
 * @member {Array.<Blob>} dLBack
 */
SubmitB2b2cApplication.prototype.dLBack = undefined;


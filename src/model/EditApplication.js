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
import {Business} from './Business';
import {Gender} from './Gender';
import {Ownership} from './Ownership';
import {SIC} from './SIC';
import {States} from './States';

/**
 * The EditApplication model module.
 * @module model/EditApplication
 * @version 1.2.0
 */
export class EditApplication {
  /**
   * Constructs a new <code>EditApplication</code>.
   * @alias module:model/EditApplication
   * @class
   * @param applicationID {String} 
   * @param partnerBusinessName {String} 
   * @param partnerDateIncorporated {String} YYYY-MM-DD
   * @param partnerBusinessType {module:model/Business} 
   * @param partnerBusinessAddress {String} 
   * @param partnerGeneralInformationCity {String} 
   * @param partnerGeneralInformationState {module:model/States} 
   * @param partnerGeneralInformationZip {Number} 
   * @param partnerWebsite {String} 
   * @param partnerSIC {module:model/SIC} 
   * @param partnerOwnership {module:model/Ownership} 
   * @param partnerBusinessDescription {String} 
   * @param partnerInitialCreditLimit {Number} 
   * @param partnerCustomerInformationFirstName {String} 
   * @param partnerCustomerInformationLastName {String} 
   * @param partnerCustomerInformationHomeAddress {String} 
   * @param partnerCustomerInformationState {module:model/States} 
   * @param partnerCustomerInformationCity {String} 
   * @param partnercustomerInformationZip {Number} 
   * @param partnerCustomerInformationPercentOwnership {Number} 
   * @param partnerCustomerInformationDOB {String} YYYY-MM-DD
   * @param gender {module:model/Gender} 
   */
  constructor(applicationID, partnerBusinessName, partnerDateIncorporated, partnerBusinessType, partnerBusinessAddress, partnerGeneralInformationCity, partnerGeneralInformationState, partnerGeneralInformationZip, partnerWebsite, partnerSIC, partnerOwnership, partnerBusinessDescription, partnerInitialCreditLimit, partnerCustomerInformationFirstName, partnerCustomerInformationLastName, partnerCustomerInformationHomeAddress, partnerCustomerInformationState, partnerCustomerInformationCity, partnercustomerInformationZip, partnerCustomerInformationPercentOwnership, partnerCustomerInformationDOB, gender) {
    this.applicationID = applicationID;
    this.partnerBusinessName = partnerBusinessName;
    this.partnerDateIncorporated = partnerDateIncorporated;
    this.partnerBusinessType = partnerBusinessType;
    this.partnerBusinessAddress = partnerBusinessAddress;
    this.partnerGeneralInformationCity = partnerGeneralInformationCity;
    this.partnerGeneralInformationState = partnerGeneralInformationState;
    this.partnerGeneralInformationZip = partnerGeneralInformationZip;
    this.partnerWebsite = partnerWebsite;
    this.partnerSIC = partnerSIC;
    this.partnerOwnership = partnerOwnership;
    this.partnerBusinessDescription = partnerBusinessDescription;
    this.partnerInitialCreditLimit = partnerInitialCreditLimit;
    this.partnerCustomerInformationFirstName = partnerCustomerInformationFirstName;
    this.partnerCustomerInformationLastName = partnerCustomerInformationLastName;
    this.partnerCustomerInformationHomeAddress = partnerCustomerInformationHomeAddress;
    this.partnerCustomerInformationState = partnerCustomerInformationState;
    this.partnerCustomerInformationCity = partnerCustomerInformationCity;
    this.partnercustomerInformationZip = partnercustomerInformationZip;
    this.partnerCustomerInformationPercentOwnership = partnerCustomerInformationPercentOwnership;
    this.partnerCustomerInformationDOB = partnerCustomerInformationDOB;
    this.gender = gender;
  }

  /**
   * Constructs a <code>EditApplication</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditApplication} obj Optional instance to populate.
   * @return {module:model/EditApplication} The populated <code>EditApplication</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EditApplication();
      if (data.hasOwnProperty('applicationID'))
        obj.applicationID = ApiClient.convertToType(data['applicationID'], 'String');
      if (data.hasOwnProperty('partnerBusinessName'))
        obj.partnerBusinessName = ApiClient.convertToType(data['partnerBusinessName'], 'String');
      if (data.hasOwnProperty('partnerDateIncorporated'))
        obj.partnerDateIncorporated = ApiClient.convertToType(data['partnerDateIncorporated'], 'String');
      if (data.hasOwnProperty('partnerBusinessType'))
        obj.partnerBusinessType = Business.constructFromObject(data['partnerBusinessType']);
      if (data.hasOwnProperty('partnerBusinessAddress'))
        obj.partnerBusinessAddress = ApiClient.convertToType(data['partnerBusinessAddress'], 'String');
      if (data.hasOwnProperty('partnerStreet2'))
        obj.partnerStreet2 = ApiClient.convertToType(data['partnerStreet2'], 'String');
      if (data.hasOwnProperty('partnerGeneralInformationCity'))
        obj.partnerGeneralInformationCity = ApiClient.convertToType(data['partnerGeneralInformationCity'], 'String');
      if (data.hasOwnProperty('partnerGeneralInformationState'))
        obj.partnerGeneralInformationState = States.constructFromObject(data['partnerGeneralInformationState']);
      if (data.hasOwnProperty('partnerGeneralInformationZip'))
        obj.partnerGeneralInformationZip = ApiClient.convertToType(data['partnerGeneralInformationZip'], 'Number');
      if (data.hasOwnProperty('partnerWebsite'))
        obj.partnerWebsite = ApiClient.convertToType(data['partnerWebsite'], 'String');
      if (data.hasOwnProperty('partnerSIC'))
        obj.partnerSIC = SIC.constructFromObject(data['partnerSIC']);
      if (data.hasOwnProperty('partnerOwnership'))
        obj.partnerOwnership = Ownership.constructFromObject(data['partnerOwnership']);
      if (data.hasOwnProperty('partnerBusinessDescription'))
        obj.partnerBusinessDescription = ApiClient.convertToType(data['partnerBusinessDescription'], 'String');
      if (data.hasOwnProperty('partnerBusinessFax'))
        obj.partnerBusinessFax = ApiClient.convertToType(data['partnerBusinessFax'], 'Number');
      if (data.hasOwnProperty('partnerInitialCreditLimit'))
        obj.partnerInitialCreditLimit = ApiClient.convertToType(data['partnerInitialCreditLimit'], 'Number');
      if (data.hasOwnProperty('partnerCustomerInformationFirstName'))
        obj.partnerCustomerInformationFirstName = ApiClient.convertToType(data['partnerCustomerInformationFirstName'], 'String');
      if (data.hasOwnProperty('partnerCustomerInformationLastName'))
        obj.partnerCustomerInformationLastName = ApiClient.convertToType(data['partnerCustomerInformationLastName'], 'String');
      if (data.hasOwnProperty('partnerCustomerInformationHomeAddress'))
        obj.partnerCustomerInformationHomeAddress = ApiClient.convertToType(data['partnerCustomerInformationHomeAddress'], 'String');
      if (data.hasOwnProperty('partnerCustomerInformationHomeStreet2'))
        obj.partnerCustomerInformationHomeStreet2 = ApiClient.convertToType(data['partnerCustomerInformationHomeStreet2'], 'String');
      if (data.hasOwnProperty('partnerCustomerInformationState'))
        obj.partnerCustomerInformationState = States.constructFromObject(data['partnerCustomerInformationState']);
      if (data.hasOwnProperty('partnerCustomerInformationCity'))
        obj.partnerCustomerInformationCity = ApiClient.convertToType(data['partnerCustomerInformationCity'], 'String');
      if (data.hasOwnProperty('partnercustomerInformationZip'))
        obj.partnercustomerInformationZip = ApiClient.convertToType(data['partnercustomerInformationZip'], 'Number');
      if (data.hasOwnProperty('partnerCustomerInformationPercentOwnership'))
        obj.partnerCustomerInformationPercentOwnership = ApiClient.convertToType(data['partnerCustomerInformationPercentOwnership'], 'Number');
      if (data.hasOwnProperty('partnerCustomerInformationDOB'))
        obj.partnerCustomerInformationDOB = ApiClient.convertToType(data['partnerCustomerInformationDOB'], 'String');
      if (data.hasOwnProperty('haveInsurance'))
        obj.haveInsurance = ApiClient.convertToType(data['haveInsurance'], 'Boolean');
      if (data.hasOwnProperty('gender'))
        obj.gender = Gender.constructFromObject(data['gender']);
    }
    return obj;
  }
}

/**
 * @member {String} applicationID
 */
EditApplication.prototype.applicationID = undefined;

/**
 * @member {String} partnerBusinessName
 */
EditApplication.prototype.partnerBusinessName = undefined;

/**
 * YYYY-MM-DD
 * @member {String} partnerDateIncorporated
 */
EditApplication.prototype.partnerDateIncorporated = undefined;

/**
 * @member {module:model/Business} partnerBusinessType
 */
EditApplication.prototype.partnerBusinessType = undefined;

/**
 * @member {String} partnerBusinessAddress
 */
EditApplication.prototype.partnerBusinessAddress = undefined;

/**
 * @member {String} partnerStreet2
 */
EditApplication.prototype.partnerStreet2 = undefined;

/**
 * @member {String} partnerGeneralInformationCity
 */
EditApplication.prototype.partnerGeneralInformationCity = undefined;

/**
 * @member {module:model/States} partnerGeneralInformationState
 */
EditApplication.prototype.partnerGeneralInformationState = undefined;

/**
 * @member {Number} partnerGeneralInformationZip
 */
EditApplication.prototype.partnerGeneralInformationZip = undefined;

/**
 * @member {String} partnerWebsite
 */
EditApplication.prototype.partnerWebsite = undefined;

/**
 * @member {module:model/SIC} partnerSIC
 */
EditApplication.prototype.partnerSIC = undefined;

/**
 * @member {module:model/Ownership} partnerOwnership
 */
EditApplication.prototype.partnerOwnership = undefined;

/**
 * @member {String} partnerBusinessDescription
 */
EditApplication.prototype.partnerBusinessDescription = undefined;

/**
 * @member {Number} partnerBusinessFax
 */
EditApplication.prototype.partnerBusinessFax = undefined;

/**
 * @member {Number} partnerInitialCreditLimit
 */
EditApplication.prototype.partnerInitialCreditLimit = undefined;

/**
 * @member {String} partnerCustomerInformationFirstName
 */
EditApplication.prototype.partnerCustomerInformationFirstName = undefined;

/**
 * @member {String} partnerCustomerInformationLastName
 */
EditApplication.prototype.partnerCustomerInformationLastName = undefined;

/**
 * @member {String} partnerCustomerInformationHomeAddress
 */
EditApplication.prototype.partnerCustomerInformationHomeAddress = undefined;

/**
 * @member {String} partnerCustomerInformationHomeStreet2
 */
EditApplication.prototype.partnerCustomerInformationHomeStreet2 = undefined;

/**
 * @member {module:model/States} partnerCustomerInformationState
 */
EditApplication.prototype.partnerCustomerInformationState = undefined;

/**
 * @member {String} partnerCustomerInformationCity
 */
EditApplication.prototype.partnerCustomerInformationCity = undefined;

/**
 * @member {Number} partnercustomerInformationZip
 */
EditApplication.prototype.partnercustomerInformationZip = undefined;

/**
 * @member {Number} partnerCustomerInformationPercentOwnership
 */
EditApplication.prototype.partnerCustomerInformationPercentOwnership = undefined;

/**
 * YYYY-MM-DD
 * @member {String} partnerCustomerInformationDOB
 */
EditApplication.prototype.partnerCustomerInformationDOB = undefined;

/**
 * @member {Boolean} haveInsurance
 */
EditApplication.prototype.haveInsurance = undefined;

/**
 * @member {module:model/Gender} gender
 */
EditApplication.prototype.gender = undefined;


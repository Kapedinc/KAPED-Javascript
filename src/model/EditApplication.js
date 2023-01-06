/*
 * KAPED PARTNER API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.36
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The EditApplication model module.
 * @module model/EditApplication
 * @version 1.0.1
 */
export class EditApplication {
  /**
   * Constructs a new <code>EditApplication</code>.
   * @alias module:model/EditApplication
   * @class
   */
  constructor() {
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
      if (data.hasOwnProperty('applicationType'))
        obj.applicationType = ApiClient.convertToType(data['applicationType'], 'String');
      if (data.hasOwnProperty('formData'))
        obj.formData = ApiClient.convertToType(data['formData'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} applicationType
 */
EditApplication.prototype.applicationType = undefined;

/**
 * @member {String} formData
 */
EditApplication.prototype.formData = undefined;


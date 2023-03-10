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

/**
 * The ResumeApplication model module.
 * @module model/ResumeApplication
 * @version 1.2.0
 */
export class ResumeApplication {
  /**
   * Constructs a new <code>ResumeApplication</code>.
   * @alias module:model/ResumeApplication
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResumeApplication</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResumeApplication} obj Optional instance to populate.
   * @return {module:model/ResumeApplication} The populated <code>ResumeApplication</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResumeApplication();
      if (data.hasOwnProperty('applicationID'))
        obj.applicationID = ApiClient.convertToType(data['applicationID'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} applicationID
 */
ResumeApplication.prototype.applicationID = undefined;


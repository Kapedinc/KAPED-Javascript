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
 * The ViewCardDetail model module.
 * @module model/ViewCardDetail
 * @version 1.2.0
 */
export class ViewCardDetail {
  /**
   * Constructs a new <code>ViewCardDetail</code>.
   * @alias module:model/ViewCardDetail
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ViewCardDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ViewCardDetail} obj Optional instance to populate.
   * @return {module:model/ViewCardDetail} The populated <code>ViewCardDetail</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ViewCardDetail();
      if (data.hasOwnProperty('userUniqueId'))
        obj.userUniqueId = ApiClient.convertToType(data['userUniqueId'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} userUniqueId
 */
ViewCardDetail.prototype.userUniqueId = undefined;

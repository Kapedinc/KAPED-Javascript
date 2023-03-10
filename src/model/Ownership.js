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
 * Enum class Ownership.
 * @enum {String}
 * @readonly
 */
const Ownership = {
  /**
   * value: "public"
   * @const
   */
  _public: "public",

  /**
   * value: "private"
   * @const
   */
  _private: "private",

  /**
   * Returns a <code>Ownership</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/Ownership} The enum <code>Ownership</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {Ownership};
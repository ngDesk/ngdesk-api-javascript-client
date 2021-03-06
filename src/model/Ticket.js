/**
 * ngDesk_Operations
 * ngDesk_Operations
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TicketMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TicketMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.NgDeskOperations) {
      root.NgDeskOperations = {};
    }
    root.NgDeskOperations.Ticket = factory(root.NgDeskOperations.ApiClient, root.NgDeskOperations.TicketMessage);
  }
}(this, function(ApiClient, TicketMessage) {
  'use strict';




  /**
   * The Ticket model module.
   * @module model/Ticket
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Ticket</code>.
   * @alias module:model/Ticket
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>Ticket</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ticket} obj Optional instance to populate.
   * @return {module:model/Ticket} The populated <code>Ticket</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TICKET_ID')) {
        obj['TICKET_ID'] = ApiClient.convertToType(data['TICKET_ID'], 'Number');
      }
      if (data.hasOwnProperty('SUBJECT')) {
        obj['SUBJECT'] = ApiClient.convertToType(data['SUBJECT'], 'String');
      }
      if (data.hasOwnProperty('DATE_REQUIRED_BY')) {
        obj['DATE_REQUIRED_BY'] = ApiClient.convertToType(data['DATE_REQUIRED_BY'], 'Date');
      }
      if (data.hasOwnProperty('SEVERITY')) {
        obj['SEVERITY'] = ApiClient.convertToType(data['SEVERITY'], 'String');
      }
      if (data.hasOwnProperty('DATE_CREATED')) {
        obj['DATE_CREATED'] = ApiClient.convertToType(data['DATE_CREATED'], 'Date');
      }
      if (data.hasOwnProperty('SOURCE')) {
        obj['SOURCE'] = ApiClient.convertToType(data['SOURCE'], 'String');
      }
      if (data.hasOwnProperty('TICKET_UUID')) {
        obj['TICKET_UUID'] = ApiClient.convertToType(data['TICKET_UUID'], 'String');
      }
      if (data.hasOwnProperty('STATUS')) {
        obj['STATUS'] = ApiClient.convertToType(data['STATUS'], 'String');
      }
      if (data.hasOwnProperty('IS_INTERNAL')) {
        obj['IS_INTERNAL'] = ApiClient.convertToType(data['IS_INTERNAL'], 'String');
      }
      if (data.hasOwnProperty('REQUESTOR_GROUP_USER_ID')) {
        obj['REQUESTOR_GROUP_USER_ID'] = ApiClient.convertToType(data['REQUESTOR_GROUP_USER_ID'], 'Number');
      }
      if (data.hasOwnProperty('ASSIGNEE_GROUP_USER_ID')) {
        obj['ASSIGNEE_GROUP_USER_ID'] = ApiClient.convertToType(data['ASSIGNEE_GROUP_USER_ID'], 'Number');
      }
      if (data.hasOwnProperty('OWNER_GROUP_USER_ID')) {
        obj['OWNER_GROUP_USER_ID'] = ApiClient.convertToType(data['OWNER_GROUP_USER_ID'], 'Number');
      }
      if (data.hasOwnProperty('REQUESTOR_NAME')) {
        obj['REQUESTOR_NAME'] = ApiClient.convertToType(data['REQUESTOR_NAME'], 'String');
      }
      if (data.hasOwnProperty('OWNER_NAME')) {
        obj['OWNER_NAME'] = ApiClient.convertToType(data['OWNER_NAME'], 'String');
      }
      if (data.hasOwnProperty('ASSIGNEE_NAME')) {
        obj['ASSIGNEE_NAME'] = ApiClient.convertToType(data['ASSIGNEE_NAME'], 'String');
      }
      if (data.hasOwnProperty('OWNER_ACCOUNT_NAME')) {
        obj['OWNER_ACCOUNT_NAME'] = ApiClient.convertToType(data['OWNER_ACCOUNT_NAME'], 'String');
      }
      if (data.hasOwnProperty('TICKET_MESSAGES')) {
        obj['TICKET_MESSAGES'] = ApiClient.convertToType(data['TICKET_MESSAGES'], [TicketMessage]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} TICKET_ID
   */
  exports.prototype['TICKET_ID'] = undefined;
  /**
   * @member {String} SUBJECT
   */
  exports.prototype['SUBJECT'] = undefined;
  /**
   * @member {Date} DATE_REQUIRED_BY
   */
  exports.prototype['DATE_REQUIRED_BY'] = undefined;
  /**
   * @member {String} SEVERITY
   */
  exports.prototype['SEVERITY'] = undefined;
  /**
   * @member {Date} DATE_CREATED
   */
  exports.prototype['DATE_CREATED'] = undefined;
  /**
   * @member {String} SOURCE
   */
  exports.prototype['SOURCE'] = undefined;
  /**
   * @member {String} TICKET_UUID
   */
  exports.prototype['TICKET_UUID'] = undefined;
  /**
   * @member {String} STATUS
   */
  exports.prototype['STATUS'] = undefined;
  /**
   * @member {String} IS_INTERNAL
   */
  exports.prototype['IS_INTERNAL'] = undefined;
  /**
   * @member {Number} REQUESTOR_GROUP_USER_ID
   */
  exports.prototype['REQUESTOR_GROUP_USER_ID'] = undefined;
  /**
   * @member {Number} ASSIGNEE_GROUP_USER_ID
   */
  exports.prototype['ASSIGNEE_GROUP_USER_ID'] = undefined;
  /**
   * @member {Number} OWNER_GROUP_USER_ID
   */
  exports.prototype['OWNER_GROUP_USER_ID'] = undefined;
  /**
   * @member {String} REQUESTOR_NAME
   */
  exports.prototype['REQUESTOR_NAME'] = undefined;
  /**
   * @member {String} OWNER_NAME
   */
  exports.prototype['OWNER_NAME'] = undefined;
  /**
   * @member {String} ASSIGNEE_NAME
   */
  exports.prototype['ASSIGNEE_NAME'] = undefined;
  /**
   * @member {String} OWNER_ACCOUNT_NAME
   */
  exports.prototype['OWNER_ACCOUNT_NAME'] = undefined;
  /**
   * @member {Array.<module:model/TicketMessage>} TICKET_MESSAGES
   */
  exports.prototype['TICKET_MESSAGES'] = undefined;



  return exports;
}));



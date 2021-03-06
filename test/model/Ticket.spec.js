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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NgDeskOperations);
  }
}(this, function(expect, NgDeskOperations) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NgDeskOperations.Ticket();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Ticket', function() {
    it('should create an instance of Ticket', function() {
      // uncomment below and update the code to test Ticket
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be.a(NgDeskOperations.Ticket);
    });

    it('should have the property TICKET_ID (base name: "TICKET_ID")', function() {
      // uncomment below and update the code to test the property TICKET_ID
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property SUBJECT (base name: "SUBJECT")', function() {
      // uncomment below and update the code to test the property SUBJECT
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property DATE_REQUIRED_BY (base name: "DATE_REQUIRED_BY")', function() {
      // uncomment below and update the code to test the property DATE_REQUIRED_BY
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property SEVERITY (base name: "SEVERITY")', function() {
      // uncomment below and update the code to test the property SEVERITY
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property DATE_CREATED (base name: "DATE_CREATED")', function() {
      // uncomment below and update the code to test the property DATE_CREATED
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property SOURCE (base name: "SOURCE")', function() {
      // uncomment below and update the code to test the property SOURCE
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property TICKET_UUID (base name: "TICKET_UUID")', function() {
      // uncomment below and update the code to test the property TICKET_UUID
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property STATUS (base name: "STATUS")', function() {
      // uncomment below and update the code to test the property STATUS
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property IS_INTERNAL (base name: "IS_INTERNAL")', function() {
      // uncomment below and update the code to test the property IS_INTERNAL
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property REQUESTOR_GROUP_USER_ID (base name: "REQUESTOR_GROUP_USER_ID")', function() {
      // uncomment below and update the code to test the property REQUESTOR_GROUP_USER_ID
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property ASSIGNEE_GROUP_USER_ID (base name: "ASSIGNEE_GROUP_USER_ID")', function() {
      // uncomment below and update the code to test the property ASSIGNEE_GROUP_USER_ID
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property OWNER_GROUP_USER_ID (base name: "OWNER_GROUP_USER_ID")', function() {
      // uncomment below and update the code to test the property OWNER_GROUP_USER_ID
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property REQUESTOR_NAME (base name: "REQUESTOR_NAME")', function() {
      // uncomment below and update the code to test the property REQUESTOR_NAME
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property OWNER_NAME (base name: "OWNER_NAME")', function() {
      // uncomment below and update the code to test the property OWNER_NAME
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property ASSIGNEE_NAME (base name: "ASSIGNEE_NAME")', function() {
      // uncomment below and update the code to test the property ASSIGNEE_NAME
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property OWNER_ACCOUNT_NAME (base name: "OWNER_ACCOUNT_NAME")', function() {
      // uncomment below and update the code to test the property OWNER_ACCOUNT_NAME
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property TICKET_MESSAGES (base name: "TICKET_MESSAGES")', function() {
      // uncomment below and update the code to test the property TICKET_MESSAGES
      //var instane = new NgDeskOperations.Ticket();
      //expect(instance).to.be();
    });

  });

}));

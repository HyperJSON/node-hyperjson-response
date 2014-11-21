'use strict';
module.exports = function() {
  var httpStatusCodes = require('./httpStatusCodes');

  function ResponseMessage(status, body) {
    this.status = status;
    this.body = body || {};
  };

  ResponseMessage.prototype.toString = function() {
    return JSON.stringify(this);
  };

  function Response(name) {
    return function(body) {
      return new ResponseMessage(httpStatusCodes[name], body);
    };
  };

  var responses = {};
  var response;

  for (var status in httpStatusCodes) {
    if (httpStatusCodes.hasOwnProperty(status)) {
      response = Response(status);
      responses[status] = response;
      responses[httpStatusCodes[status].code] = response;
    }
  }

  return responses;
}();
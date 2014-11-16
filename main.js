'use strict';
module.exports = function() {
  var httpStatusCodes = require('./httpStatusCodes');

  var Response = function(name) {
    return function(body) {
      return {
        status: httpStatusCodes[name],
        body: body || {}
      };
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
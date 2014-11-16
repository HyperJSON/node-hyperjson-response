'use strict';
module.exports = function() {
  return {
    accepted: {
      code: '202',
      message: 'Accepted'
    },
    badGateway: {
      code: '502',
      message: 'Bad Gateway'
    },
    badRequest: {
      code: '400',
      message: 'Bad Request'
    },
    conflict: {
      code: '409',
      message: 'Conflict'
    },
    continue: {
      code: '100',
      message: 'Continue'
    },
    created: {
      code: '201',
      message: 'Created'
    },
    expectationFailed: {
      code: '417',
      message: 'Expectation Failed'
    },
    forbidden: {
      code: '403',
      message: 'Forbidden'
    },
    gatewayTimeout: {
      code: '504',
      message: 'Gateway Timeout'
    },
    gone: {
      code: '410',
      message: 'Gone'
    },
    httpVersionNotSupported: {
      code: '505',
      message: 'HTTP Version Not Supported'
    },
    insufficientSpaceOnResource: {
      code: '419',
      message: 'Insufficient Space on Resource'
    },
    insufficientStorage: {
      code: '507',
      message: 'Insufficient Storage'
    },
    internalServerError: {
      code: '500',
      message: 'Server Error'
    },
    lengthRequired: {
      code: '411',
      message: 'Length Required'
    },
    locked: {
      code: '423',
      message: 'Locked'
    },
    methodFailure: {
      code: '420',
      message: 'Method Failure'
    },
    methodNotAllowed: {
      code: '405',
      message: 'Method Not Allowed'
    },
    movedPermanently: {
      code: '301',
      message: 'Moved Permanently'
    },
    movedTemporarily: {
      code: '302',
      message: 'Moved Temporarily'
    },
    multiStatus: {
      code: '207',
      message: 'Multi-Status'
    },
    multipleChoices: {
      code: '300',
      message: 'Multiple Choices'
    },
    noContent: {
      code: '204',
      message: 'No Content'
    },
    nonAuthoritativeInformation: {
      code: '203',
      message: 'Non Authoritative Information'
    },
    notAcceptable: {
      code: '406',
      message: 'Not Acceptable'
    },
    notFound: {
      code: '404',
      message: 'Not Found'
    },
    notImplemented: {
      code: '501',
      message: 'Not Implemented'
    },
    notModified: {
      code: '304',
      message: 'Not Modified'
    },
    ok: {
      code: '200',
      message: 'OK'
    },
    partialContent: {
      code: '206',
      message: 'Partial Content'
    },
    paymentRequired: {
      code: '402',
      message: 'Payment Required'
    },
    preconditionFailed: {
      code: '412',
      message: 'Precondition Failed'
    },
    processing: {
      code: '102',
      message: 'Processing'
    },
    proxyAuthenticationRequired: {
      code: '407',
      message: 'Proxy Authentication Required'
    },
    requestTimeout: {
      code: '408',
      message: 'Request Timeout'
    },
    requestTooLong: {
      code: '413',
      message: 'Request Entity Too Large'
    },
    requestUriTooLong: {
      code: '414',
      message: 'Request-URI Too Long'
    },
    requestedRangeNotSatisfiable: {
      code: '416',
      message: 'Requested Range Not Satisfiable'
    },
    resetContent: {
      code: '205',
      message: 'Reset Content'
    },
    seeOther: {
      code: '303',
      message: 'See Other'
    },
    serviceUnavailable: {
      code: '503',
      message: 'Service Unavailable'
    },
    switchingProtocols: {
      code: '101',
      message: 'Switching Protocols'
    },
    temporaryRedirect: {
      code: '307',
      message: 'Temporary Redirect'
    },
    unauthorized: {
      code: '401',
      message: 'Unauthorized'
    },
    unprocessableEntity: {
      code: '422',
      message: 'Unprocessable Entity'
    },
    unsupportedMediaType: {
      code: '415',
      message: 'Unsupported Media Type'
    },
    useProxy: {
      code: '305',
      message: 'Use Proxy'
    }
  };
}();
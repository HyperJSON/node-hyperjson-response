'use strict';
var hjResponse = require('./main');
var data = ['lions', 'tigers', 'bears'];

// call the "ok" wrapper for status 200/OK
var dataOk = hjResponse.ok(data);
console.log(dataOk);
// => { status: { code: '200', message: 'OK'}, body: ['lions', 'tigers', 'bears'] }

// or, call the "200" wrapper for status 200/OK
var data200 = hjResponse['200'](data);
console.log(data200.toString());
// => { status: { code: '200', message: 'OK'}, body: ['lions', 'tigers', 'bears'] }
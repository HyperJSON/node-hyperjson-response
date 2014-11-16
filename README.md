# Node HyperJSON Response

Quickly wrap data in a [HyperJSON Response message](https://github.com/HyperJSON/HyperJSON-Response)

## Version 0.0.1

## FYI

- [IANA HTTP Status Code Registry](https://www.iana.org/assignments/http-status-codes/http-status-codes.xml)
- View [`./httpStatusCodes.js`](./httpStatusCodes.js) to find all the currently available message wrappers.

## Installation

```javascript
$ npm install --save hyperjson-response
```

## Usage

```javascript
var hjResponse = require('hyperjson-response');
var data = ['lions', 'tigers', 'bears'];

// call the "ok" wrapper for status 200/OK
var dataOk = hjResponse.ok(data);
console.log(dataOk);
// => { status: { code: '200', message: 'OK'}, body: ['lions', 'tigers', 'bears'] }

// or, call the "200" wrapper for status 200/OK
var data200 = hjResponse['200'](data);
console.log(data200);
// => { status: { code: '200', message: 'OK'}, body: ['lions', 'tigers', 'bears'] }

```

## ISC License (ISC)

Copyright &copy; 2014, Buster Collings

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
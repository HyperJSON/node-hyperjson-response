hjr = require('./main');

var messageTypes = [];

for (var response in hjr) {
  if (hjr.hasOwnProperty(response)) {
    messageTypes.push(response);
  }
}

console.log(messageTypes);
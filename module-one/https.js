const request = require('./request');
const response = require('./response');

function makeRequest(url, data) {
    request.send(url, data);
    return response.read();
}

const responseData = makeRequest('http://www.google.com', 'Hello World!');
console.log({ responseData });

const { get } = require('https');

// The response passed into the callback function is the result of the http.request.
const req = get('http://www.google.com', (res) => {
    //The callback takes in the event name as the first parameter and a listener as a callback function.
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`)
    })
    res.on('end', () => {
        console.log(`No more data.`)
    })
})
//We need to do this, the end function causes the request to be sent.
//"request" does the came thing as "get". But if you use "request", you have to call the end function.
//"get" will automatically call the "end" function.
// req.end();




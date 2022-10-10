const axios = require('axios');

axios.get('https://wwwww.google.com')
    .then((response) => {
        console.log(response)
    })
    .catch(e => console.log("Error Ocurred", e))
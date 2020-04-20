const fetch = require('node-fetch');
const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';
fetch(url, { headers: { Authorization: `Basic YWRtaW46aHZnWDhLbFZFYQ==` } })
.then((response) => 
    {return response.json()} // if I put curly brackets here it gets undefined, why?
)
.then((data)=>console.log(data))
.catch((error)=>console.log(error));

const fetch = require('node-fetch');

fetch('http://api.icndb.com/jokes/random')
    .then(res => res.json())
    .then(body => console.log(body.value.joke));


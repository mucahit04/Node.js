const axios = require('axios');
const url = 'https://reservation100-sandbox.mxapps.io/api/reservations';
 
const data = {
    name: "John Doe",
    numberOfPeople: 3
  }

axios
.post(url, data)
  .then(response=> console.log(response.data))
  .catch(error=> console.log(error.response.status, error.response.statusText))


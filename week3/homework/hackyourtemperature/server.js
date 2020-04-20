'use strict';

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const axios = require('axios');

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=> 
    res.render('index')
);

app.post('/weather', (req,res)=>{
    const cityName = req.body.cityName;
    const API_KEY = require('./sources/secrets.json').API_KEY;
    if (cityName){
       axios(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
        .then(response=>{
            const cityTemp = response.data.main.temp;
            res.render('index', { weatherText:`The temperature in ${cityName} is ${cityTemp} °C!`});
        })
        .catch(error=>res.render('index', { weatherText: "City is not found!" })); 
    }else{
        res.render('index',{ weatherText: "You must type something" });
    }
    

})



app.listen(3000);
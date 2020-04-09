const express = require('express'); // Loading in Express web server functionality
const app = express(); // Instantiate Express web server
const exphbs  = require('express-handlebars'); // Loading connector handlebars with express

// Configuring our web server
app.set('view engine', 'handlebars'); // What type of view engine will this server run?
app.engine('handlebars', exphbs({ defaultLayout: 'main' })); // Connecting handlebars with express (exphbs) + specifying main template
app.use(express.urlencoded({ extended: true })); // Configure what data type POST requests come in

// GET route
app.get('/', (req, res) =>{
    res.render('index')
});

// POST route
app.post('/weather' , (req,res)=> {
    console.log('request:', req)
    const cityName = req.body.cityName ;
    res.render('index', {cityName});

});

app.listen(3000);
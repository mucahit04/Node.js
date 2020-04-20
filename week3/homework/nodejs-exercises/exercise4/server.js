const Handlebars = require('handlebars');

const subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"]

let i = Math.floor(Math.random()*7) //generate random number between 0-6

const punchlines = ["watch movie with", "spread some love", "put on cake", "clean toilets", "go to the moon",
                     "achieve world piece", "help people learn programing"];

const source = "{{subject}} is great to {{punchline}} ";

const template = Handlebars.compile(source);
 
const data = { "subject": subjects[i],
             "punchline": punchlines[i]};

const result = template(data);

console.log(result);
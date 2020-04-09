'use strict';
const express = require('express');
const app = express();
const fs = require("fs");// to store blog posts in seperate files

app.use(express.json());

app.get('/', (req,res)=> 
    res.send('Hello!')
);

//POST the 'blog posts' to the server 
app.post('/blogs', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    fs.writeFileSync(title, content);
    res.end('ok')
})

//Update an existing post, calling it by its title
app.put('/blogs', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    if (fs.existsSync(title)) {
      fs.writeFileSync(title, content);
      console.log(content);
      res.end('ok')
    }
    else {
      res.end('post does not exist');
    }
})

//DELETE a blog post by calling its title
app.delete('/blogs/:title', (req, res) => {
    const title = req.params.title;
    fs.unlinkSync(title);
    res.end('ok');
})

//Reading a blog post by calling its title
app.get('/blogs/:title', (req, res) => {
    const title = req.params.title;
    res.sendfile(title);
})

app.listen(3000);
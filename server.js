const express = require('express');
const app = express();

const drinks = require('./models/drinks')

app.get('/', (req, res)=>{
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (req, res) => {
    res.render('index.ejs', {allDrinks: drinks})
});

app.get('/drinks/:id', (req, res) => {
    res.render("drinkshow.ejs", {drink: drinks[req.params.id]});
  });


app.listen(3000, () => {
    console.log('listening');
});
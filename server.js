const express = require('express');
const app = express();

const drinks = require('./models/drinks')
const food = require('./models/food')

app.get('/', (req, res)=>{
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (req, res) => {
    res.render('index.ejs', {allDrinks: drinks, allFood: food})
});

app.get('/drinks/:id', (req, res) => {
    res.render("drinkshow.ejs", {drink: drinks[req.params.id]})  
});

app.get('/food/:id', (req, res) => {
    res.render("foodshow.ejs", {foods: food[req.params.id]})  
});

app.listen(3000, () => {
    console.log('listening');
});
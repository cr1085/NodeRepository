
const express = require('express');
const {getRandomQuote,getQuoteByCategory,getAllCategories} = require('./quotes');

const app= express();
const PORT= process.env.PORT || 3000;


app.use(express.json());


app.get('/', (req, res) => {

    res.json({
        message:'Bienvenido al generador geek de frases',
        endpoint:{
             random:'/api/quote',
             byCategory:'/api/quote/category',
             categories:'/api/categories',
             all:'/api/quotes'
         },
        ejemplo:'Visita /api/quote para una frase aleatoria'
    });
});


app.get('/api/quote', (req, res) => {
const quote= getRandomQuote();
res.json({
    ...quote,
    timestamp: new Date().toISOString(),
});
});

app.get('/api/quote/category', (req, res) => {
const category = req.params.category;
const quotes = getQuotesByCategory(category);

if(quotes.length === 0){
return res.status(404).json({
    error: 'Categoría no encontrada',
    avaliableCategories: getAllCategories(),
});
}

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
res.json({
...randomQuote,
totalInCategory: quotes.length,
timestamp: new Date().toISOString(),
});

});


app.get('/api/categories', (req, res) => {
    res.json({
        categories: getAllCategories(),
        total: getAllCategories().length,
    });
});



app.get('/api/quotes', (req, res) => {
    res.json({
       total:require('./quotes').quotes.length,
         quotes:require('./quotes').quotes,
    });
});


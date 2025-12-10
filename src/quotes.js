const quotes=[
    {
        'text':'Hola mundo',
        'author':'anónimo',
        'category':'programacion',
    },
    {
        'text':'solo existen 10 tipos de personas jajaja las que dicen si y las que dicen no ',
        'author':'anónimo',
        'category':'binario',
    },
    {
        'text':'Primero resuelve el problema y luego el codigo',
        'author':'anónimo',
        'category':'tecnologia',
    },
];


function getRandomQuote(){
    return quotes[Math.floor(Math.random()*quotes.length)];
}

function getQuoteByCategory(category){
   return quotes.filter(quote => quote.category === category);
}

function getAllCategories(){
    const categories= [...new Set(quotes.map(quote => quote.category))];
    return categories;
}


module.exports={
getRandomQuote,
getQuoteByCategory,
getAllCategories,   
quotes
};
const express = require('express');
const app = express();
const port = 3000;
let products = [
    {
        id: 1,
        name: 'marker',
        price: 100
    },
    {
        id: 2,
        name: 'pen',
        price: 50
    },
    {
        id: 3,
        name: 'Eraser',
        price: 5
    },
]



//middlewares 
//log middlewares
app.use(function(req,res,next){
    console.log(`${req.method} : ${req.url} : ${new Date()}`);
    next();
})


//route handler methods
app.get('/', function(req, res){
    res.send('<h2>Hello World</h2>');
});

app.get('/about', function(req, res){
    res.send({
        notice: 'This is the about us section'
    });
});

app.get('/contact', function(req, res){
    res.send('<h2>Contact Details</h2>');
});

app.get('/products', function(req, res){
    // res.send('<h2>Product Details:</h2>\n');     //we cannot use multiple send();
    res.send(products);
});

app.listen(port, function(){
    console.log(`Listening on port ${port}...`);
})

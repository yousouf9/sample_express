const express = require('express');

const app = express();

const port = 3000;


app.get('/', (req, res) => {

    res.send('<h1>My Expresss sample application</h1><h4>Version 1.0.o0</h4>')
})

app.get('/products', (req, res) => {
    res.send([
        {
            productID: '101',
            price:100,
        },
        {
            productID: '102',
            price:120,
        },
        {
            productID: '103',
            price:150,
        }
    ])
})


app.listen(port, () => {
    console.log(`Application is listenning on port ${port}`);
})
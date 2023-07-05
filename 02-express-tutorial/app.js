console.log('Express Tutorial')

const express = require('express');
const path = require('path');
const { products } = require('./data');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.get('/api/v1/test', (req, res) => {
    res.json({message: 'It worked!'})
});

app.get('/api/v1/products', (req, res) => {
    res.json(products)
});

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID)
    const product = products.find(p => p.id = idToFind)

    if (!product) {
        return res.status(404).json({message: 'That product was not found'})
    }
    return res.json(product)
});

app.get("/api/v1/query", (req, res) => {
    const { search, limit, price } = req.query;
    let searchProducts = [...products];

    switch (true) {
        case Boolean(search):
            searchProducts = searchProducts.filter((product) => {
                return product.name.startsWith(search);
            });
            break;
        case Boolean(limit):
            searchProducts = searchProducts.slice(0, Number(limit));
            break;
        case Boolean(price < 20.00):
            searchProducts = searchProducts.filter((product) => {
                return product.price <20.00;
            })
            break;
        default:
            break;
    }

    return res.status(200).json(searchProducts)
});

app.all('*', (req, res) => {
    res.status(404).send('Page not found')
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000...')
});
console.log('Express Tutorial')

const express = require('express');
const path = require('path');
const { products } = require('./data');
const app = express();
const peopleRouter = require('./routes/peopleRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const time = `${day}/${month}/${year}`;

    console.log(method, url, time)
    next();
};

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger);
app.use(express.static(path.join(__dirname, './methods-public')));
app.use('/api/v1/people', peopleRouter);
app.use(authRouter);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.get('/api/v1/test', (req, res) => {
    res.json({message: 'It worked!'})
});

//products API
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
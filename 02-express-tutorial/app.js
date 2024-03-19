const express = require('express');
const { products } = require("./data");
const app = express();

//  `app.use` statements for the middleware. You’ll eventually use many kinds of middleware, but for now the only middleware we are using is `express.static()`.
app.use(express.static('./public'));

// API endpoint returning tst message
app.get('/api/v1/test', (req,res) => {
    res.json({ message: "It worked!" });
})

// API endpoint returning products array
app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

// API endpoint retrieving a particular product by ID 
// productID is a parameter
app.get('/api/v1/products/:productID', (req, res) => {
    // The parseInt is needed because query parameters are always passed as strings, so you have to convert this to an integer. 
    const idToFind = parseInt(req.params.productID); 
    // Finding the product with the matching ID
    const product = products.find((p) => p.id === idToFind);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "That product was not found." });
    }
});

// API endpoint to handle product search and limit
// example: http://localhost:3000/api/v1/query?search=al&limit=5
// the user wants to see all products where the name starts with “al”, but the user wants to see no more than 5 products. 
app.get('/api/v1/query', (req, res) => {
    // Destructuring the query parameters 'search' and 'limit'
    const { search, limit } = req.query;
    // Creating a new array to store filtered results
    let filteredProducts = [...products];

    // Perform search based on query parameter 'search'
    if (search) {
        filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()));
    }

    // Limit the number of products based on query parameter 'limit'
    if (limit) {
        const limitNumber = parseInt(limit);
        filteredProducts = filteredProducts.slice(0, limitNumber);
    }

    res.json(filteredProducts);
}); 

// An `app.all` statement after these to handle page not found conditions.
app.all('*', (req, res) => {
    res.status(404).send('Page not found');
})

// An `app.listen` statement to tell the server to listen for requests on a particular port.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
// This program should use the built-in http module to create a simple web server that listens on port 3000. This is done with the createServer function. You pass it a callback function that checks the request variable (req) for the current url property, and depending on what the URL is, sends back a message to the browser screen. Then have your code listen on port 3000, run this file with the node command, and test it from your browser, by navigating to http://localhost:3000.

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page!')
    } else if (req.url === '/about') {
        res.end('About page!')
    } else {
        res.end(`
        We cannot locate the page you are looking for. 
        Please try again some time later.`)
    }
})

server.listen(3000, () => {
    console.log('The server is listening in port 3000')
})
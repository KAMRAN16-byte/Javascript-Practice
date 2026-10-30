const http = require('http');

const server = http.createServer((req, res) => {
    const method  = req.method;
    const path = req.url;

    console.log(`Method: ${method} , path - ${path}`);

    res.end("Thanks you for requesting...");

})

server.listen(4000, 'localhost', () => {
    console.log('Server started at port 4000');
});
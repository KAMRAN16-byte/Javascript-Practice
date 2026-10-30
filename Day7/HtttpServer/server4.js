const http = require('http')
const user = require('./routes/user')
const products = require('./routes/product')

const server = http.createServer((req, res) => {


    res.setHeader('content-type', 'text/html')
    if(req.url === '/product')
        products(req, res)
    else
        user(req, res)
})

server.listen(8000, () => {
    console.log('Server started on port 8000')
})
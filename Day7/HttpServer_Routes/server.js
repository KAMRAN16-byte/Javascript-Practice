const http = require('http')
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

const server = http.createServer((req, res) => {
    const path = req.url;
    res.setHeader('content-type', 'application/json');

    if(path === '/product')
        productRouter(req, res);
    else
        userRouter(req, res);
})

server.listen(8000,()=>{
    console.log("Server running on port 8000")
})
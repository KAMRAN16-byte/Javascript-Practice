const http = require('http')

const server = http.createServer((req, res) => {
    const method = req.method;
    const path = req.url;

    res.setHeader('content-type', 'text/html')
})

server.listen(8000,()=>{
    console.log(`Server listening on ${server.address().port}`);
})
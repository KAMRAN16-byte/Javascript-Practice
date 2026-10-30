const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html')
    res.end(`<h1>Hello</h1>`)

})

server.listen(8000, 'localhost', () => console.log('Server is running on port 8080'));
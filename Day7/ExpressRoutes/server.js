const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.send('<h1>Welcome to my website!</h1>')
})

app.listen(8000, 'localhost', () => {
    console.log("Server running on port 8000")
})


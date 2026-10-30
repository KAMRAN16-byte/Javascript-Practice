const express = require('express')

const app = express()

const product = [
    {pid : 1, name:'pen',price:20},
    {pid : 2, name:'pencil',price:10},
    {pid : 3, name:'book',price:26},
    {pid : 4, name:'crayons',price:50},
]

const user = [
    {name: 'Kamran', age: 30, mobile: '7975525736'},
    {name: 'Fayaz', age: 70, mobile: '5363456345'},
    {name: 'Shoeb', age: 36, mobile: '4363456345'},
    {name: 'wasil', age: 29, mobile: '6747832572'},
    {name: 'Mujeeb', age: 76, mobile: '4563456345'}
]

app.get('/', (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.send('<h1>Welcome to my Website!</h1>')
})

app.get('/user', (req, res) => {
    res.setHeader('content-type', 'application/json')
    res.send(user)
})

app.post('/user', (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.send('<h1>user added successfully!</h1>')
})

app.put('/user', (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.send('<h1>Updated user successfully!</h1>')
})

app.delete('/user', (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.send('<h1>Deleted user successfully!</h1>')
})

app.get('/product', (req, res) => {
    res.setHeader('content-type', 'application/json')
    res.send(product)
})

app.post('/product', (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.send('<h1>product added successfully!</h1>')
})

app.put('/product', (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.send('<h1>Updated product successfully!</h1>')
})

app.delete('/product', (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.send('<h1>Deleted product successfully!</h1>')
})



app.listen(8000, 'localhost', ()=>{
    console.log("Server running on port 8000")
})
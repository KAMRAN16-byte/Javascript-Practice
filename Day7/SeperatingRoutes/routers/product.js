
const products = [
    {pid : 1, name:'pen',price:20},
    {pid : 2, name:'pencil',price:10},
    {pid : 3, name:'book',price:26},
    {pid : 4, name:'crayons',price:50}
]

const express = require('express')

const productRouter = express.Router()

productRouter.get('/', (req, res) => {
    res.setHeader('content-type', 'application/json')
    res.send(products)
})

productRouter.post('/', (req, res) => {
    res.setHeader('content-type', 'test/html')
    res.send('<h1>New Product added successfully!</h1>>')
})

productRouter.delete('/', (req, res) => {
    res.setHeader('content-type', 'test/html')
    res.send('<h1>Product deleted successfully!</h1>>')
})

productRouter.put('/', (req, res) => {
    res.setHeader('content-type', 'test/html')
    res.send('<h1>Product updated successfully!</h1>>')
})

module.exports = productRouter
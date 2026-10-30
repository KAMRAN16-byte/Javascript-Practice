const user = [
    {name: 'Kamran', age: 30, mobile: '7975525736'},
    {name: 'Fayaz', age: 70, mobile: '5363456345'},
    {name: 'Shoeb', age: 36, mobile: '4363456345'},
    {name: 'wasil', age: 29, mobile: '6747832572'},
    {name: 'Mujeeb', age: 76, mobile: '4563456345'}
]
const express = require('express')

const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.setHeader('content-type', 'application/json')
    res.send(user)
})

userRouter.post('/', (req, res) => {
    res.setHeader('content-type', 'test/html')
    res.send('<h1>New User added successfully!</h1>>')
})

userRouter.delete('/', (req, res) => {
    res.setHeader('content-type', 'test/html')
    res.send('<h1>User deleted successfully!</h1>>')
})

userRouter.put('/', (req, res) => {
    res.setHeader('content-type', 'test/html')
    res.send('<h1>User updated successfully!</h1>>')
})

module.exports = userRouter
const express = require('express')
const productRouter = require("./routers/product");
const userRouter = require("./routers/user");

const app = express()
app.get('/', (req, res) => {
    res.send('Welcome to the Kamran site');
})

app.use('/product', productRouter)

app.use('/user', userRouter)

app.listen(8000,'localhost',()=>{
    console.log("Server running on port 8000")
    console.log()
})
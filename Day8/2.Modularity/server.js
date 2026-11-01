const express = require('express');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json());
app.use('/user',userRoutes)
app.listen(8000, ()=>{
    console.log('Server started on port 8000');
})
const express = require('express')
const mysql2 = require('mysql2/promise')

const app = express()
const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'KamraN@0101',
    database: 'express'
});

app.use(express.json())

app.get('/', (req, res) => {

})

app.get('/user', async (req, res) => {
    const sql = `SELECT * FROM user`;
    try{
        const result = await pool.query(sql)
        res.send(result[0])
    }catch(e){
        console.error(e);
    }
})

app.post('/user', async (req, res) => {
    const sql = `INSERT INTO user(name, email, password, mobile) VALUES (?,?,?,?)`
    const {name, email, password, mobile} = req.body

    try{
    const result = await pool.query(sql,[name, email, password, mobile])
        res.send(result[0])
    }catch(err){
        console.log(err)
    }
})

app.put('/user/:id', async (req, res) => {
    const sql = `UPDATE user SET mobile = ? WHERE id = ?`
    try{
        const result = await pool.query(sql,[req.body.mobile,req.params.id])
        res.send(result[0])
    }catch(e){
        console.error(e)
    }

})

app.delete('/user/:id', async (req, res) => {
    const sql = `DELETE FROM user WHERE id = ?`
    try{
        const result = await pool.query(sql,[req.params.id])
        res.send(result[0])
    }catch(e){
        console.error(e)
    }
})

app.listen(8000, 'localhost', () => console.log('Kamran server running on port 8000'))
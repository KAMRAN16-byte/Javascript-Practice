const express = require('express')
const mysql2 = require('mysql2/promise');


const app = express()

const pool = mysql2.createPool({
        host: "10.235.125.133",
        user: "Codex_computer",
        password: "codex@123",
        database: "college"
    }
)

app.get('/student', async (req, res) => {
    const sql = 'SELECT * FROM student';
    try {
        const data = await pool.query(sql);
        const result = {status: 'success', data: data[0]};
        res.send(result);
    } catch (err) {
        console.log(err);
    }
})

app.get('/product', (req, res) => {

    console.log("resquest accepted");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dummyjson.com/products')
    xhr.send()

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.response);
            res.send(data);
        }
    }

    console.log("request served!")
})
// app.get('/product', (req, res) => {
//
//     console.log("resquest accepted");
//     fetch('https://dummyjson.com/products').then((data) => data.json()).then((data) => {res.send(data)})
//         .catch(err => console.log(err));
//     console.log("request served!")
// })


app.listen(8000, 'localhost', () => {
    console.log("Server running on port 8000")
})
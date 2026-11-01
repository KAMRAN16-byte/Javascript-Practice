const express = require('express');
const db = require('../db/pool.js');
const createResult = require('../utils/result');

const routes = express.Router();


routes.get('/', (req, res) => {
    const sql = `SELECT * FROM user`;
    db.query(sql).then((result) => {
        res.send(createResult(result[0]));
    })
        .catch((err) => {
            res.send(createResult(null,err));
        })
})

routes.post('/', async (req, res) => {
    const sql = `INSERT INTO user(name, email, password, mobile) VALUES (?, ?, ?, ?)`
    const {name, email, password, mobile} = req.body;
    try {
        res.send(createResult((await db.query(sql, [name, email, password, mobile]))[0]));
    } catch (e) {
        res.send(createResult(null,e));
    }
})

routes.put('/:id', async (req, res) => {
    const sql = `UPDATE user SET mobile = ? WHERE id = ?`
    try {
        res.send(createResult((await db.query(sql,[req.body.mobile, req.params.id]))[0]))
    } catch (e) {
        res.send(createResult(null,e));
    }
})

routes.delete('/:id', (req, res) => {
    const sql = `DELETE FROM user WHERE id = ?`
    db.query(sql, [req.params.id]).then(result => {
        res.send(createResult(result))
    })
        .catch(e => {
            res.send(createResult(null,e));
        })
})
module.exports = routes;
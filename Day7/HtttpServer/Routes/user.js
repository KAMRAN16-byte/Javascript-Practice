function user(req, res) {
    const path = req.url
    const method = req.method
    if(method === 'GET')
        res.end('<h1>All Users</h1>')
    else if(method === 'POST')
        res.end('<h1>NNew User Added</h1>')
    else if(method === 'DELETE')
        res.end('<h1>Deleted User successfully</h1>')
    else if(method === 'PUT')
        res.end('<h1>Updated User successfully</h1>')
}

module.exports = user
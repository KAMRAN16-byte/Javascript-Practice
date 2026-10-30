function product(req, res) {
    const path = req.url
    const method = req.method

    if (method === 'GET' )
        res.end('<h1>All Product List</h1>')
    else if (method === 'POST')
        res.end('<h1>Added Product</h1>')
    else if (method === 'DELETE')
        res.end('<h1>Deleted Product</h1>')
    else if (method === 'PUT')
        res.end('<h1>Updated Product</h1>')
}

module.exports = product
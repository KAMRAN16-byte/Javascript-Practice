const products = [
    {pid : 1, name:'pen',price:20},
    {pid : 2, name:'pencil',price:10},
    {pid : 3, name:'book',price:26},
    {pid : 4, name:'crayons',price:50},
]

function productRouter(req,res){
    const method = req.method;

    if(method === 'GET')
        res.end(JSON.stringify(products))
    else if(method === 'POST')
        res.end('<h1>Post Successfully</h1>')
    else if(method === 'DELETE')
        res.end('<h1>Deleted User successfully</h1>')
    else if(method === 'PUT')
        res.end('<h1>Updated User successfully</h1>')
}

module.exports= productRouter;
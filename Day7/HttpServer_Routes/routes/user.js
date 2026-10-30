const user = [
    {name: 'Kamran', age: 30, mobile: '7975525736'},
    {name: 'Fayaz', age: 70, mobile: '5363456345'},
    {name: 'Shoeb', age: 36, mobile: '4363456345'},
    {name: 'wasil', age: 29, mobile: '6747832572'},
    {name: 'Mujeeb', age: 76, mobile: '4563456345'}
]

function userRouter(req, res) {
    const path = req.path
    const method = req.method;

    if(method === 'GET')
        res.end(JSON.stringify(user))
    else if(method === 'POST')
        res.end("<h1>Added User successfully!</h1>")
    else if(method === 'DELETE')
        res.end("<h1>Deleted User successfully!</h1>")
    else if(method === 'PUT')
        res.end("<h1>Updated User successfully!</h1>")
}

module.exports = userRouter;
const fs = require('fs/promises')

fs.readFile("file1.txt", "utf8")
    .then(r => {
        console.log(r);
        return fs.appendFile("file1.txt", " append data")
    }).then(() => {
    return fs.readFile("file1.txt", "utf8")
})
    .then((data) => {
        console.log(data)
    })
    .catch(err => console.log(err));
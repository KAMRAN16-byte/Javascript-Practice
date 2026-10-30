const fs = require('fs')

function writeDataInfoFile()
{
    fs.writeFile("file1.txt", "lorem",()=>{})
}

function readDataInfoFile()
{
    fs.readFile("file1.txt",(err,data)=>{
        if(data)
        {
            console.log("data: " + data)
        }
        else
        {
            console.log(err)
        }
    })
}

writeDataInfoFile()

readDataInfoFile()
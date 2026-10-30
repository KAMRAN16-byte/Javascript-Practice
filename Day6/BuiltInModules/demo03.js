const fs = require("fs");

function readData()
{
    console.log("readData start");
    fs.readFile("file1.txt","utf-8", (error, data) => {
        console.log("readData end");
        if(data)
        {
            console.log(data)
        }
        else
        {
            console.log(data)
        }
    })

}

function dummyCalc()
{
    console.log("dummyCalc start");
    console.log(564645+4364356);
    console.log("dummyCalc end");
}

readData()
dummyCalc();
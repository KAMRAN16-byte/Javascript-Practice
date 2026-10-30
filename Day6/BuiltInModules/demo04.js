const fs = require("fs");

function doWork()
{
    fs.readFile("./file1.txt", "utf8", (err, data)=> {
        if(data)
        {
            console.log(data);
            fs.appendFile("./file1.txt", "world",(error)=>{
                if(error){
                    console.log(error);
                }
            });
            fs.readFile("file1.txt","utf-8",(err, data) => {
                if(data){
                    console.log(data);
                    fs.appendFile("file1.txt", "sunbeam scam 2026",(error)=>{
                        if(error){
                            console.log(error);
                        }
                    })

                    fs.readFile("file1.txt","utf-8",(err, data) => {
                        if(data){
                            console.log(data);
                        }
                        else{
                            console.log(err);
                        }
                    })
                }
                else{
                    console.log(err);
                }
            })
        }
        else
        {
            console.log(err);
        }
    })
}



doWork();
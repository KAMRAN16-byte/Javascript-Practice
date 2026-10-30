const fs = require("fs/promises");

async function doWork(){
    try{
        const data = await fs.readFile("file1.txt", "utf8");
        console.log(data);
        await fs.appendFile("file1.txt", "awaits");
        const data2 = await fs.readFile("file1.txt", "utf8");
        console.log(data);
        await fs.appendFile("file1.txt", "awaits");
        const data3= await fs.readFile("file1.txt", "utf8");
        console.log(data3);
    }catch (err){
        console.log(err);
    }
}
doWork();
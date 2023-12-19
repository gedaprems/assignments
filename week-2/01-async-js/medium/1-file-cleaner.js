// newString = string.replace(/\s+/g,' ').trim();


const fs = require('fs');

fs.readFile('medium/demo.txt',(err,data)=>{
    let outdata = data.toString().replace(/\s+/gi,' ').trim();

    fs.writeFile('medium/demo.txt',outdata,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Successfully Cleaned");
    })
})
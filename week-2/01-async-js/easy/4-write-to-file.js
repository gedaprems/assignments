const fs = require('fs');


let data = "This is my new data";

fs.writeFile('easy/demo.txt',data,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    fs.readFile('easy/demo.txt',(err, data)=>{
        console.log(data.toString());
    });
    console.log("Data is printed");
});


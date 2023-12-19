const fs = require('fs');

fs.readFile('easy/demo.txt',(err,data)=>{

    console.log(data.toString());
    
});



console.log("fs.readFile()");

for(let i=0; i<10000; i++){
    console.log("In loop");
}

console.log("afterloop");
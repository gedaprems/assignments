let count = 1;

const counter = setInterval(()=>{
    if(count== 20){
        clearInterval(counter);
    }
    console.log(count);
    count++;


},1000);


counter;
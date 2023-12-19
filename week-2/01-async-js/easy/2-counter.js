let count = 1;


function interval(){
    setTimeout(()=>{
        console.log(count);
        count++;
        interval();
    }, 1000);
}

setTimeout(()=>{
    interval();
},1000);




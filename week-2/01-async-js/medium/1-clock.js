// 13:45:23
let hour = 23;
let minute = 59;
let second = 55;
setInterval(()=>{
    let secondCarry = (Number(second)+1)/60;
    second = (Number(second) + 1)%60;

    // console.log(secondCarry);

    if(secondCarry == 1){
        let minuteCarry = (Number(minute)+1)/ 60;
        minute = (Number(minute)+1)%60;
        
        if(minuteCarry== 1){
            hour = (Number(hour)+1)%24;
        }
    }
    if(Number(hour)<10){
        hour = "0"+Number(hour);
    }
    if(Number(minute)<10){
        minute = "0"+Number(minute);
    }
    if(Number(second)<10){
        second = "0"+Number(second);
    }
    console.log(hour+":"+minute+":"+second);
},1000)



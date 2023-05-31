const print=(str, times=0)=>{
    for(let i=0;i<times; i++){
        console.log(`${str} ${i+1}` ,'\n');
    }
}

print('Redux Toolkit Tutorial - ', 31)
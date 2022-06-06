const numbers =[1,2,3,4,5,6];

const numberDouble = numbers.map((value,index,arr)=>{
    return value * index;
})

console.log(numberDouble);

const filtered = numbers.filter(val=> val%2==0).map(value=>value*100);

console.log(filtered);
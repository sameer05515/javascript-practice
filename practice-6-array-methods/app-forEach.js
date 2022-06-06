let array1 = ['Ram', 'Shyam', 'Sita', 'Radha', 'Ram', 'Shyam', 'Ravan', 'Kans', 'Balram', 'Lakshman'
    , 'Shyam', 'Sita', 'Radha', 'Ram', 'Shyam', 'Ravan', 'Kans', 'Balram', 'Lakshman'
    , 'Shyam', 'Sita', 'Radha', 'Ram', 'Shyam', 'Ravan', 'Kans', 'Balram', 'Lakshman' 
    , 'Shyam', 'Sita', 'Radha', 'Ram', 'Shyam', 'Ravan', 'Kans', 'Balram', 'Lakshman'
    , 'Shyam', 'Sita', 'Radha', 'Ram', 'Shyam', 'Ravan', 'Kans', 'Balram', 'Lakshman'
    , 'Shyam', 'Sita', 'Radha', 'Ram', 'Shyam', 'Ravan', 'Kans', 'Balram', 'Lakshman']

let array2 = ['Ram', 'Shyam', 'Sita', 'Radha', 'Balram', 'Lakshman']

const forEachExample= (arr)=>{
        let ppp={};
    arr.forEach(item=>{
        if(ppp[item]){
            ppp[item]++;
        }else{
            ppp[item]=1;
        }
    })
    for (const key in ppp) {
        console.log(`${key} = ${ppp[key]}`)
    }
}

const drawSeperator=()=>{
    console.log('--------------------------------------------------')
}

forEachExample(array1);
drawSeperator();
forEachExample(array2);
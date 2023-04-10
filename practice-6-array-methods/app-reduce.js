const numbers = [1, 2, 3, 4, 5, 6, 7];

const initialValue = 0;

const products=[
    {name:'Java 8 Book',count:6},
    {name:'JavaScript Book',count:5},
    {name:'Typescript Book',count:3}
]


const callbackSum = (accumulator, value, index, arr) => {
    return accumulator + value;
}

const callbackMax = (accumulator, value) => {
    return (accumulator > value) ? accumulator : value;
}

const total = numbers.reduce(callbackSum, initialValue);

console.log(total);

console.log([1, 2, 3].reduce(callbackSum, 0));

console.log([-1,-2,3,-4].reduce(callbackMax))

console.log(`Total books in store 
${products.reduce((accumulator,product)=>accumulator+ product.count,0)}`)
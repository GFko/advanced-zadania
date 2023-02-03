// Function
const squareCount = (x) => {
    return Number.isInteger(Math.sqrt(x));
}

//Input
const inputs = [-1,0,3,4,25,26];

//Output
const output = inputs.map(squareCount);

output.map((v, i) => console.log(`${inputs[i]} => ${v}`));
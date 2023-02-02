// Function
const squareCount = (x) => {
    if(Math.sqrt(x) == x*x){
        return true;
    }
    else {
        return false;
    }
}

//Input
const input = -1;

//Output
const output = squareCount(input);

console.log(`${input} => ${output}`);
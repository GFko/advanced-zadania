// Function
const upToLowOrder = (numbers) => {
    return numbers.sort(function(a, b){return b-a});
    }

// Input
const input = 82614097;

const inputArr = Array.from(String(input));
const outputArr = upToLowOrder(inputArr);

// Output
const output = Number(outputArr.join(''));

console.log(`Input numbers: ${input} \nOutput numbers in descending order: ${output}`);
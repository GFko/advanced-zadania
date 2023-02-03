// Function
const upToLowOrder = (numbers) => {
    return numbers.sort((a,b) => b - a);
}

// Input
const input = 82614097;

const inputArr = Array.from(String(input));
const outputArr = upToLowOrder(inputArr);

// Output
const output = Number(outputArr.join(''));

console.log(`Input numbers: ${input} \nOutput numbers in descending order: ${output}`);
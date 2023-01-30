function countV(text) {
    const count = text.match(/[aeiou]/gs).length;
    return count;
}

const input = "testing vowel text";
const finalCount = countV(input);

console.log("Input text: \n\"" + input + "\"\nhas " + finalCount + " vowels")
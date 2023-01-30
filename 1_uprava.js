const countVowels = (text) => {
    return text.match(/[aeiou]/gs).length;
}

const input = "testing vowel text";
const finalCount = countVowels(input);

console.log(`Input text: \n"${input}"\nhas ${finalCount} vowels`);
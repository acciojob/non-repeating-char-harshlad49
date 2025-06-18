function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find and return the first character with count 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no unique character is found
    return null;
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);
alert(result !== null ? result : "null");

function findLargest(a, b, c) {
    const largestNumber =  Math.max(a, b, c)
    return largestNumber
}

const large = findLargest(3, 1, 8)
console.log(large)

function reverseWords(sentence){
    const splittedSentence = sentence.split(' ')
    const reversedSentence = splittedSentence.reverse()
    const joinedSentence = reversedSentence.join(' ')
    return joinedSentence
    
}

console.log(reverseWords("Hello world!")); // Output: "world! Hello"
console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"
// console.log(reverseWords("JavaScript is fu



// Description: Write a function findLongestWord that takes an array of strings as an argument and returns the longest word in the array. If there are multiple words with the same length, return the first one.
function findLongestWord(words) {
    let longestWord = ""
    for (let word of words){
        if (word.length > longestWord.length){
            longestWord = word
        }
    }
    return longestWord
}

console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"

console.log(findLongestWord(["red", "blue", "green"])); // Outponsole.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"ut: "green"


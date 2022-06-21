function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

function reverseString(word) {
    let reverseWord = ''
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i]
    }
    return reverseWord
}

const calculator = {
    add: function(a, b) { return a + b },
    subtract: function(a, b) { return a - b },
    multiply: function(a, b) { return a * b },
    divide: function(a, b) { return a / b }
}

function cipher(word, shift) {
    const lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const upperAlpabet = lowerAlphabet.map(letter => letter.toUpperCase())
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

    const mergedLibrary = [lowerAlphabet, upperAlpabet, numbers]
    let shiftedWord = ''
    for (let letter of word) {
        if (!mergedLibrary.find(library => library.includes(letter))) {
            shiftedWord += letter
            continue
        }
        const currentLibrary = mergedLibrary.find(library => library.includes(letter))
        const currentIndex = currentLibrary.indexOf(letter)
        const shiftedIndex = (currentIndex + shift) % (currentLibrary.length)
        shiftedWord += currentLibrary[shiftedIndex]
    }
    return shiftedWord
}

function analyzeArray(arr) {
    const analysis = {
        average: arr.reduce((prev, curr) => {return prev + curr}, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
    return analysis
}

export {
    capitalize,
    reverseString,
    calculator,
    cipher,
    analyzeArray
}
function newRandonNumber () {
    const random = (Math.random() * 100).toFixed(0)

    return random;
}

function capsLockString (string) {
    const newString = string.toUpperCase()

    return newString;
}

function firstLetter (string) {
    const first = string[0]

    return first;
}

function concatStrings (string1, string2) {
    const newString = string1 + string2;

    return newString;
}

module.exports = {newRandonNumber, capsLockString, concatStrings, firstLetter}

console.log(newRandonNumber())
console.log(capsLockString('HIaaaaO'))
console.log(firstLetter('higino'))
console.log(concatStrings('higino','Jade'))
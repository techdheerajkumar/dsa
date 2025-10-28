// function checkPalindromeWord(word){
//     let result = 'Its a palindrome word'
//     for(let i=0; i<word.length; i++){
//         if(word[i] !== word[word.length-(i+1)]){
//             return 'Its not a Palindrom word'
//         }
//     }
//     return result;
// }

// console.log(checkPalindromeWord('aba'))


function checkPalindromNumber(num) {
    if (num < 0) return 'It is not a palindrome number'
    let reverseNumber = 0;
    let originalNumber = num
    while (num > 0) {
        let findLast = num % 10;
        reverseNumber = (10*reverseNumber) + findLast;
        num = Math.floor(num / 10);
    }
    if(originalNumber === reverseNumber){
        return 'It is a Palindrome Number'
    }else {
        return 'It is not a Palindrome Number'
    }
}

console.log((checkPalindromNumber(1)))
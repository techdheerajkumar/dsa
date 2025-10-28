function countDigit(num) {
    let count = 0;
    num = Math.abs(num) // Handling negative numbers (converting negative numbers to positive)
    if (num === 0) return 1; // Handling 0 number case
    let n = Math.floor(num); // Handling decimal numbers
    while (n > 0) {
        n = Math.floor(n / 10)
        count++
    }
    return count;
}
console.log(countDigit(3331))
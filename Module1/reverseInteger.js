function reverseInteger(x){
   let isNegative = false
    if(x<0){
        x -= x*2;
        isNegative = true
    }
    let rev = 0;
    while(x > 0){
        let rem = x % 10;
        rev = (10*rev) + rem;
        x = Math.floor(x/10)
    }
     if (rev < -2147483648 || rev > 2147483647) {
        return 0;
    }
    if(isNegative){
        rev = rev - (rev*2)
    }
    return rev      
}
console.log(reverseInteger(1534236469))
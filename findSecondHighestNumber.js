let arr = [2,5,1,8,4];
let firstHighestNumber = 0;
let secondHighestNumber = 0;

for(let i = 0; i < arr.length; i++){
    if(firstHighestNumber < arr[i]){
        secondHighestNumber = firstHighestNumber
        firstHighestNumber = arr[i]
    }
}

// 0 < 2 = 2
// 2 < 5 = 5
// 5 < 1 = 5 : 0 > 5 
// 5 < 8 = 8
// 4 < 8 = 8
console.log(firstHighestNumber, secondHighestNumber)



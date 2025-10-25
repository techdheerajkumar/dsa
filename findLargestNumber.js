function findLargestNumber(arr){
    let largestNumber = 0
    for(let i = 0; i < arr.length; i++){
        if(largestNumber < arr[i]){
            largestNumber = arr[i]
        }
    }
    return largestNumber;
}

let arr = [2,-5,7,-8,66,3];
let findNumber = findLargestNumber(arr)

console.log(findNumber);
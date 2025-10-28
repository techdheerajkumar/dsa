function findingIndex(arr, num){
    let result = -1
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            result = i
        }
    }
    return result;
}

let arr = [2,5,7,8,66,3];
let findNumber = findingIndex(arr, 67)

console.log(findNumber)

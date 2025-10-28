function findNegativeNumbers(arr){
    let negativeArray = []
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
          negativeArray.push(arr[i])
          count++
        }
    }
    if(negativeArray.length > 0){
        return negativeArray

    }else {
        return 'No negative number are found in the array'
    }
}

let arr = [2,-5,7,-8,66,3];
let findNumber = findNegativeNumbers(arr)

console.log(findNumber);
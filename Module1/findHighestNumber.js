let arr = [2,5,1,8,4];
let maxNumber = 0;

for(let i = 0; i < arr.length; i++){
    if(maxNumber < arr[i]){
        maxNumber = arr[i]
    }
}

console.log(maxNumber)

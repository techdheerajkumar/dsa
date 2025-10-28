function findSecondLargest(arr) {
    if (!arr.length) return;
    if (arr.length < 2) return null;
    let firstLargestNumber = -Infinity;
    let secondLargestNumber = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargestNumber ) {
            secondLargestNumber = firstLargestNumber
            firstLargestNumber = arr[i];
        } else if (arr[i] > secondLargestNumber && arr[i] !== firstLargestNumber) {
            secondLargestNumber = arr[i]
        }
    }
    return secondLargestNumber;
}


let arr = [1,5,2,3,5];
console.log(findSecondLargest(arr))
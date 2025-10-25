function findSmallest(arr) {
    let smallestNumber = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i]
        }
    }

    console.log(smallestNumber)
}

let arr = [5, 11, 3, 22, 53]
findSmallest(arr)
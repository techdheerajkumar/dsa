// for(i = 0; i<=3; i++){
//     let row = ''
//     for(j=0; j<=i; j++){
//         row += '*'
//     }
//     console.log(row)
// }

let n = 5

// *****
// ****
// ***
// **
// *
// for(let i = 1; i<=n; i++){
//     let row = '';
//     for(let j = 0; j<=n-i; j++){
//         row += '*'
//     }
//     console.log(row)
// }


/* Pattern three
    *
   **
  ***
 ****
*****


for(let i = 0; i<n; i++){
    let row = '';

    for(let j = 0; j < n-(i+1); j++){
        row += ' '
    }
    for(let k = 0; k < i+1; k++){
        row += '*'
    }
    console.log(row)
}
*/


/* Pattern Four
    *
   ***
  *****
 *******
*********


for(let i = 0; i<n; i++){
    let row = '';

    for(let j = 0; j < n-(i+1); j++){
        row += ' '
    }
    for(let k = 0; k < i+(i+1); k++){
        row += '*'
    }
    console.log(row)
}
*/


/**
 * Patter Five
 * 1
 * 1 0
 * 1 0 1
 * 1 0 1 0
 * 1 0 1 0 1
 * 1 0 1 0 1 0
 */

for (let i = 0; i <= n; i++) {
    let row = '';
    let value = 1;
    for (let j = 0; j <= i; j++) {
        row += value;
        if (value === 1) {
            value = 0
        } else {
            value = 1
        }
    }
    console.log(row)
}
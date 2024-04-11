function checkAnswer(arr,div,cows) {
    let count = 1;
    let last = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] - last >= div) {
            count++;
            last = arr[i];
        }
    }
    if(count >= cows) {
        return true;
    }
    return false
} 

function bruteForce(stalls,k) {
    var n = stalls.length; // size of array
    // sort the stalls[]
    stalls.sort((a, b) => a - b);

    var limit = stalls[n - 1] - stalls[0];
    for (var i = 1; i <= limit; i++) {
        if (checkAnswer(stalls, i, k) === false) {
            return i - 1;
        }
    }
    return limit;
}

function aggressiveCows(stalls, k) {
    const n = stalls.length; // size of array
    stalls.sort((a, b) => a - b); // sort the stalls array

    let low = 1, high = stalls[n - 1] - stalls[0];
    // apply binary search
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (canWePlace(stalls, mid, k)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
}


let arr = [0,3,4,7,10,9];
let cows = 4;

let arr_two = [4,2,1,3,6];
let cows_two = 2;

console.log("Brute force", bruteForce(arr_two,cows_two))
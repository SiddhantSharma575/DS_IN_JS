

function bruteForce(arr) {
    let row = -1
    let max = -1;
    for(let i=0; i<arr.length; i++) {
        let cnt = 0;
        for(let j=0; j<arr[0].length; j++) {
            if(arr[i][j] === 1) 
               cnt++;
        }
        if(cnt !== 0 && cnt > max) {
            max = cnt;
            row = i;
        }
    }
    return row;
}

function optimal(arr) {
    let row = -1;
    for(let i=0; i<arr.length; i++) {
        let low = 0;
        let prev = -1;
        let high = arr[i].length-1;
        while(low <= high) {
            let mid = Math.round((low + high )/ 2);
            if(arr[mid] <= 1) {
                high = mid-1;
            }else {
                low = mid+1
            }
        }
        console.log("low",high)
        // console.log((arr[i].length - low))
        if((arr[i].length - low) !== 0 && (arr[i].length - low) > prev) {
            row = i;
            prev = (arr[i].length - low);
        }
    }
    return row;
}

function lowerBound(arr, n, x) {
    let low = 0, high = n - 1;
    let ans = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an answer
        if (arr[mid] >= x) {
            ans = mid;
            // look for smaller index on the left
            high = mid - 1;
        } else {
            low = mid + 1; // look on the right
        }
    }
    return ans;
}

function rowWithMax1s(matrix, n, m) {
    let cnt_max = 0;
    let index = -1;

    // traverse the rows:
    for (let i = 0; i < n; i++) {
        // get the number of 1's:
        let cnt_ones = m - lowerBound(matrix[i], m, 1);
        if (cnt_ones > cnt_max) {
            cnt_max = cnt_ones;
            index = i;
        }
    }
    return index;
}


let arr = [
    [1,1,1],
    [0,0,1],
    [0,0,0]
];

console.log("Brute Force", bruteForce(arr));
console.log("Optimal", rowWithMax1s(arr,3,3))
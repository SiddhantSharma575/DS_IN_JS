
function maxElement(arr,n,m,col) {
    let max = -1;
    let index = -1;
    for(let i=0; i<n; i++) {
        if(arr[i][col] > max) {
            max = arr[i][col];
            index = i;
        }
    }
    return index;
}

function peakElementOne(arr, n, m) {
    let low = 0;
    let high = m-1;
    while(low <= high) {
        let mid = Math.floor((low+high)/2);
        let row = maxElement(arr,n,m,mid);

        let left = mid-1  > 0 ? arr[row][mid-1] : -1;
        let right = mid+1 < m ? arr[row][mid+1] : -1;
        if(arr[row][mid] > left && arr[row][mid] > right) {
            return [row,mid];
        }else if(arr[row][mid] < left) {
            high  = mid-1;
        } else {
            low = mid+1;
        }
    }
    return [-1,-1];
}



let arr = [
    [10,20,15],
    [21,30,14],
    [7,16,32],
]

console.log("SOLVE_ONE", peakElementOne(arr, 3,3));
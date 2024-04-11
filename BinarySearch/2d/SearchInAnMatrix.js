
function solve(arr,target) {
    for(let i=0; i<arr.length; i++) {
        let low = 0;
        let high = arr[i].length-1;
        while(low <= high) {
            let mid = Math.floor((low + high)/2);
            if(arr[i][mid] === target) {
                return true;
            }else if(arr[i][mid] < target) {
                low = mid+1;
            }else {
                high = mid-1;
            }
        }
    }
    return false;
}



let arr = [
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
]

let target = 5;
console.log("solve", solve(arr,target));
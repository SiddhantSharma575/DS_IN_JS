function checkAnswer(arr,pages) {
    let student = 1;
    let pages_student = 0;
    for(let i=0; i<arr.length; i++) {
        if(pages_student + arr[i] <= pages) {
            pages_student += arr[i];
        }else {
            student++;
            pages_student = arr[i];
        }
    }
    return student;
}


function bookAllocate(arr,k) {
    let max_ele = Math.max(...arr);
    let sum_ele = arr.reduce((acc,ele) => acc + ele,0);
    for(let i=max_ele; i<=sum_ele; i++) {
        let books = checkAnswer(arr,i);
        if(books === k) {
            return i;
        }
    }
}

function findPages(arr, n, m) {
    // book allocation impossible
    if (m > n) return -1;

    var low = Math.max(...arr);
    var high = arr.reduce((a, b) => a + b, 0);
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var students = checkAnswer(arr, mid);
        if (students > m) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}


let arr = [25, 46, 28, 49, 24];
let k = 4;
console.log("BOOK_ALLOCATION", bookAllocate(arr,k));
console.log("BOOK_ALLOCATION", findPages(arr,5,k));
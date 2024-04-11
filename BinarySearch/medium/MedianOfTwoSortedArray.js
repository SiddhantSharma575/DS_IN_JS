function solution_one(arr1,arr2) {
    let sorted_arr = [...arr1,...arr2];
    sorted_arr = sorted_arr.sort((a,b) => a-b);
    console.log(sorted_arr)
    if(sorted_arr.length % 2 === 0) {
        return (sorted_arr[(sorted_arr.length/2)-1] + sorted_arr[sorted_arr.length/2])/2;
    }else {
        console.log(Math.round((sorted_arr.length/2))-1)
        return sorted_arr[Math.round((sorted_arr.length/2))-1]
    }
}



let arr1 = [2,4,6];
let arr2 = [1,3];
// arr1.push(...arr2).sort((a,b) => a-b);
console.log("FIRST_ONE", solution_one(arr1,arr2));
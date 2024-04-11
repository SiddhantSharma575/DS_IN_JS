function floorAndCeilOfArray(arr, target) {
  let floor = arr.length;
  let ceil = arr.length;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= target) {
      floor = arr[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  low = 0;
  high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      ceil = arr[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return [floor, ceil];
}

const arr = [3, 4, 4, 7, 8, 10];
const target = 5;
console.log("FLOOR AND CEIL", floorAndCeilOfArray(arr, target));

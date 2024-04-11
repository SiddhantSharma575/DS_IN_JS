// const readline = require("readline")

// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })

// let userInput = "";

// rl.question("What is your name \n", async function(string) {
//     userInput = parseInt(string);
//     let arr = new Array(userInput);
//     rl.question("enter array values \n", function(str) {
//         console.log("ARRAY VALUES", str)
//     })
//     console.log("User Input is : ", userInput)
//     rl.close()
// })

let arr = [-1, 0, 1, 2, -1, -4];
let ans = [];

for (let i = 0; i < arr.length - 2; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      const csum = arr[i] + arr[j] + arr[k];
      if (csum === 0) {
        const cans = [];
        cans.push(arr[i]);
        cans.push(arr[j]);
        cans.push(arr[k]);
        // cans.sort();
        const isAlreadyPresent = ans.some(
          (subArray) =>
            subArray.length === cans.length &&
            subArray.every((value) => cans.includes(value))
        );
        if (!isAlreadyPresent) {
          ans.push(cans);
        }
      }
    }
  }
}

function triplet(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let hashset = new Set();
    for (let j = i + 1; j < arr.length; j++) {
      const third = -(arr[i] + arr[j]);
      if (hashset.has(third)) {
        const cans = [arr[i], arr[j], third];
        cans.sort((a, b) => a - b);
        ans.push(cans);
      }
      hashset.add(arr[j]);
    }
  }

  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  return ans;
}

console.log(triplet(arr));

// console.log(ans);

// Optimal

function optimalTriplet(arr) {
  let ans = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i != 0 && arr[i] === arr[i - 1]) continue;
    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        let temp = [arr[i], arr[j], arr[k]];
        ans.push(temp);
        j++;
        k--;

        while (j < k && arr[j] === arr[j - 1]) j++;
        while (j < k && arr[k] === arr[k + 1]) k--;
      }
    }
  }
  return ans;
}

console.log(optimalTriplet(arr));

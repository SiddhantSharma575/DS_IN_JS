
function commonPrefixUtil(str1, str2) {
    let result = "";
    let n1 = str1.length, n2 = str2.length;
    // Compare str1 and str2 
    for (let i = 0, j = 0; i <= n1 - 1 && j <= n2 - 1; i++, j++) {
        if (str1[i] != str2[j]) {
            break;
        }
        result += str1[i];
    }

    return (result);
}

// A Function that returns the longest common prefix 
// from the array of strings 
function commonPrefix(arr, n) {
    let prefix = arr[0];

    for (let i = 1; i <= n - 1; i++) {
        prefix = commonPrefixUtil(prefix, arr[i]);
    }

    return (prefix);
}


let arr = ["flower", "flow", "flight"];
console.log("STR_length", commonPrefix(arr,3))
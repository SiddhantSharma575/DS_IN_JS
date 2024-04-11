
function reverseWord(str) {
    return str.split(" ").reverse().join(" ")
}

function reverseWordOne(str) {
    let ans = "";
    for(let i=str.length-1; i>=0; i--) {
        ans += str[i];
    }
    return ans;
}

function reverseWordOptimal(str) {
    let ans = "";
    let curr = "";
    for(let i=str.length-1; i>=0; i--) {
        if(str[i] === " ") {
            curr = reverseWordOne(curr)
            ans += curr + " ";
            curr = ""
        }else {
            curr += str[i];
        }
    }
    curr = reverseWordOne(curr);
    ans += curr;
    return ans;
}


let str = "this is an amazing program"
console.log("REVERSE_WORD", reverseWord(str))
console.log("REVERSE_WORD", reverseWordOptimal(str))

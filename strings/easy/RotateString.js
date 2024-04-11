
function generateRotated(str1,i) {
    return str1.substring(i+1) + str1.substring(0,i+1);
}

function checkStr(str1,str2) {
    for(let i=0; i<str1.length-1; i++) {
        const rotatedStr = generateRotated(str1, i);
        if(rotatedStr === str2) {
            return true;
        }
    }
    return false;
}


let str1 = "abcde";
let str2 = "abced";

console.log("CHECK_STR", checkStr(str1,str2));

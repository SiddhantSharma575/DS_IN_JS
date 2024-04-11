

function solve(str) {
    let parenthesCount = 0;
    let result = "";
    
    for (const letter of str) {
        if (letter === "(") {
            if (parenthesCount) {
                result += letter;
            }
            parenthesCount++;
        } else {
            parenthesCount--;
            if (parenthesCount) {
                result += letter;
            }
        }
    }
    
    return result;
}



let str = "(()())(())";

console.log("SOLVE", solve(str))
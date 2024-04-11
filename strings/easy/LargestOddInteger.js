function solution(str) {
    for(let i=str.length-1; i>=0; i--) {
        if(parseInt(str[i]) % 2 === 1) {
            return str.substring(0,i+1);
        }
    }  
    return ""
}







let str = "52";
let strTwo = "35427"
console.log("SOLVE", solution(str));
console.log("SOLVE_TWO", solution(strTwo));


function solve(str1,str2) {
    let map = new Map();
    for(let i=0; i<str1.length; i++) {
        map.set(str1[i],map.has(str1[i]) ? map.get(str1[i]) + 1 : 0);
    }
    for(let i=0; i<str2.length; i++) {
        if(!map.has(str2[i])) {
            return false;
        }else {
            if(map.get(str2[i]) !== 0) {
              map.set(str2[i],map.get(str2[i])-1);
            }
        }
    }
    
    for(const [key,value] of map) {
        if(value !== 0) {
            return false;
        }
    }
    return true;
}



let str1 = "rat";
let str2 = "trd";
console.log("SOLVE", solve(str1,str2));
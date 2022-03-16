let n = "name";
let a = "age";
const user = {
    [n]: "Mike",
    [a]: 30,
    [1+4]:5
}
console.log(user);
function makeObj(key,val){
    return {
        [key] : val,
    }
}
const obj = makeObj("나이",33);
console.log(obj);

const use = {
    name : "Mike",
    age : 30,
}
const use2 = Object.assign({},use);
use2.name = "Tom";
console.log(use);
console.log(use2);
const result1 = Object.keys(use);
console.log(result1);
const result2 = Object.values(use);
console.log(result2);
const result3 = Object.entries(use);
console.log(result3);
let arr = [
['mon','월'],
['tue','화']
]
const result = Object.fromEntries(arr);
console.log(result); 

let msg = 'Hello';
console.log('함수 호출 전');
console.log(msg);
function sayHello(name)
{
    if(name){
        msg += `, ${name}`;
    }
    console.log(msg);
}
sayHello();
sayHello('Mike');
sayHello(msg);

let msg2 = "welcome";
console.log(msg2);
function sayHello2(name = 'friend'){
    let msg = "Hello"
    console.log(msg2 + ' '+ name);
}
sayHello2();
sayHello2('mike');

function add(num1,num2){
    return num1+num2;
}
const result = add(2,3);
console.log(result);
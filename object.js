const superman = {
    name : 'clark',
    age : 30,
}
console.log(superman.name);
console.log(superman['age']);
superman.hairColor = 'black';
superman['hobby']='football';

delete superman.age;
console.log(superman);
function makeObject(name2,age2){
    return{
    name2,
    age2,
    hobby2:'football'
    }
};
const Mike = makeObject("Mike",30);
console.log(Mike);

console.log('age2' in Mike)
console.log("birthday" in Mike);
function isAdult(user){
    if(user.age<20){
        return false;
    }else{
        return true;
    }
}
console.log(isAdult(Mike));

for(key in Mike){
    console.log(key);
    console.log(Mike[key]);
}
let days = ['mon','tue','wed'];
days[1] = '화요일';
console.log(days);
console.log(days[1]);
console.log(days.length);
days.push("thu");
days.unshift("sun");
for(let index = 0;index<days.length;index++)
{
    console.log(days[index]);
}
for(let x of days){
    console.log(x);
}
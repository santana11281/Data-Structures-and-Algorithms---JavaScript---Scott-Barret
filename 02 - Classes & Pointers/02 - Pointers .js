



//no pointer
let num1 = 5;
let num2 = num1;

num1 = 10;

console.log(num1, num2);



///pointer
let obj1 = {
    value: 20
};
let obj2 = obj1;

obj1.value = 22;

console.log(obj1.value, obj2.value);

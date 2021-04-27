// create five variables and assign them values
// each variable should reference a different primitive data type
// ! REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let fun = true;
let money = 1000;
let name = 'julian';
let champion = null
let ok = undefined

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(name);
console.log(money);
console.log(fun);
console.log(ok);
console.log(champion);

// create a variable that references a template literal
// inside the template literal, use two variables
let me = `I said " I found ${money} dollars on the ground " now I can have some fun`

// reassign the value of the variable that references "null"
champion = 'Lakers';

// print the value and its type
console.log(champion);

// print a variable that causes a ReferenceError
console.log(ok);

// alter the previous line to no longer cause a ReferenceError
ok = true

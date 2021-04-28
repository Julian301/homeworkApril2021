let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = 0;
y = null
z =""
// print x, y, and z
// console.log(x, y, z)
// const a = 0;
// const b = NaN;
// const c = null;
// // try to reassign a, b, and c to FALSY values
// console.log(a, b, c)
// using BRACKET NOTATION, assign a value to b
b[2] =  "ok"
// using DOT NOTATION, assign a PROPERTY to c
c.property = 'new property'
// using DOT NOTATION, assign a METHOD to c
c.method = function(){
  console.log('hello world')
}

// using BRACKET NOTATION, call the method in c
c.method()
// print a, b, and c

// console.log({fname:'joes',age:25});
console.log("hello world");
console.table({ fname: "joes", age: 25 });
console.error("custom sample error");
console.warn("custom sample error");
console.clear();
console.time("timer");

for (i = 0; i < 10; i++) {
  console.log(i);
}

console.timeEnd("timer");

const age = 22;
const result = age >= 18 ? "eligible" : "not eligible";

console.log(result);

function welcome(name) {
  const result = name ? name : "No name";
  console.log("Welcome " + result);
}

welcome();
welcome(null);
welcome("aski");

user = { name: "aski", age: 24 };
console.log(user);
console.log(user.name);

const greeting = () => {
  return "Hello";
};

console.log(greeting());

const greeting2 = () => {
  const name = user ? user.name : "no name";
  return "hello " + name;
};

console.log(greeting2(user));

a = 5;
b = 2;
console.log(a << b);
console.log(a >> b);

//nullish operator ??

const a1 = null ?? "no value";
const b1 = 10 ?? 45;
console.log(a1);
console.log(b1);

const user1 = { name: "aski" };
console.log(user1);
console.log(user1.name);
user1.city ??= "sainthamruthu";
console.log(user1.city);

// postfix increment a++
// prefix increment ++a

let x = 3;
const y = x++;
console.log(x, y);

let x1 = 3;
const y1 = ++x1;
console.log(x1, y1);

// let  age1= prompt("Enter Your Age");
// if (age1 != null && age1>= 18){
//     console.log("you are eligible");
// }
// else
// {
//     console.log("you are not eligible");
// }

//nested if statement

// if(cond){
//     if(cond){

//     }
// }

//switch statement
let num1 = 1;

switch (num1) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  default:
    console.log("not a number");
    break;
}

//combining statement

let letter = "a";

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("vowel");
    break;
  default:
    console.log("not a vowel");
    break;
}

//while
let i2 = 1;
while (i2 <= 10) {
  console.log(i2);
  i2++;
}

//do while
// do{
//     code be executed if the condition true
// } while(condition)

let table = 2;
limit = 5;
i3 = 1;

do {
  console.log(table + " X " + i3 + " = " + table * i3);
  i3++;
} while (i3 <= limit);

//for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let = arr = [];
for (let i = 0; i < 100; i += 2) {
  arr.push(i);
}
console.log(arr);
console.log(arr[49]);



let nums=[];
for(let i =0;i<3;i++)
{
  nums.push([]);
  for(let j=0;j<3;j++){
    nums[i].push(j);
  }
}

console.log(nums);
console.table(nums);



let peyars = ["a", "b", "c", "d", "e"];

for (let i = 0; i < peyars.length; i++) {
  console.log(peyars[i]);
}


console.log("for of loop");  //same as above
for(let name of peyars){
  console.log(name);
}

let users={
  name:"aski",
  age:24,
  city:"kalmunai",
  contact : "0775521360"
}


let arr_keys = Object.keys(users);
console.table(arr_keys);

//break

for (let i =0 ; i<=10 ; i++) {
  console.log(i);
  if(i==4){
    break;
  }
}

//continue

for (let i =0 ; i<=10 ; i++) {
  if(i==4){
    continue;
  }
  console.log(i);
}

// label blocks


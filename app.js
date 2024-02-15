let element = document.getElementsByTagName("h1");
console.log(element[0]);
element[0].innerHTML = "text";

element[0].style.backgroundColor = "red";

let button = document.querySelector("#myButton");
button.addEventListener("mouseover", handleclick);

function handleclick(){
    console.log("button clicked");
}


//doesn't work
let input = document.getElementById("myInput");
button.addEventListener("keyup", handleup);

function handleup(event){
    console.log(event);
    console.log(event.target);
}

// let img = document.getElementsByTagName("img");
// img[0].setAttribute("src", "https://i0.wp.com/www.spielanime.com/wp-content/uploads/2024/01/Fans-are-confused-whether-to-watch-Solo-Leveling-anime-in-Korean-or-Japanese-1.webp");

// let nbr_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let filteredNbr = nbr_arr.filter(num => num >= 5);
// console.log("Numbers greater than or equal to 5:", filteredNbr);

// let evenNbr = nbr_arr.filter(num => num % 2 === 0);
// console.log("Even numbers:", evenNbr);

// let str_arr = ["hallo", "ich", "bin", "azaiez", "gallela"];
// let filteredStr = str_arr.filter(string => string.length <= 5);
// console.log("Strings with length less than or equal to 5:", filteredStr);

// let people = [
//     { name: "sallah", age: 22, club: true },
//     { name: "amar", age: 24, club: false },
//     { name: "salim", age: 20, club: true },
//     { name: "ranim", age: 17, club: true }
// ];

// let clubMembers = people.filter(person => person.club);
// console.log("Club members:", clubMembers);

// let adults = people.filter(person => person.age > 18);
// console.log("Adults:", adults);



//**************************************************************
// function outerFun(name){
//     function innerFun(){
//         console.log("Hello, " + name);
//     }
//     return innerFun;
// }

// const closure = outerFun("azaiez");
// closure();


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function ourFilter(array, callback){
//     let ourNewArray = [];
//     for (let i = 0; i < array.length; i++) {
//         ourNewArray.push(array[i]);
//     }
//     return ourNewArray;
// }

// function callback(value, index, array){
//     if(value % 2 == 0){
//         return true;
//     }
//     return false;
// }

// newArray = ourFilter(arr, callback);

// console.log(newArray);

//ilet arr = [2, 4, 6, 8];
// function mapping(array, cb){
//     let newArray = [];
//     for(let i=0; i<array.length; i++){
//         newArray[i] = cb(array[i], i, array);
//     }
//     return newArray;
// }

// function cb(value, index, array){
//     console.log(value * index);
// }

// let newArr= mapping(arr, (value, index, array) => value*5);

// console.log(newArr)

// let arr = [2, 4, 6, 8];
// const newArr = arr.map((value, index, array) => console.log(index*value));
 
// function arithOperation(a, b, cb){
//     console.log(cb(a, b));
// }

// arithOperation(10, 5, div);

// function div(a, b){
//     if(b!=0){
//         return a / b;
//     }
//     else {
//         return console.log("b should not be a zero");
//     }
// }

// let products = [
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 20 },
//     { id: 3, name: 'Product 3', price: 30 },
//     { id: 4, name: 'Product 4', price: 40 },
// ];

// for (let i = 0; i < products.length; i++) {
//     console.log("Product : " + products[i].id);
//     console.log("Name : " + products[i].name);
//     console.log("Price : " + products[i].price);
//     console.log("----------------------");
// }

// for(let key in products){
//     console.log("product ID : " + products[key].id);
//     console.log("product Name : "+ products[key].name);
//     console.log("product Price : "+ products[key].price);
//     console.log("-------------------")
// }

// let person={
//     name: "Azaiez",
//     lastName: "GALLELA",
//     age: 22,
//     birthDate: {
//         day: 2,
//         month: 2,
//         year: 2002
//     },
//     hobbies: ["Gaming", "Music Listenning", "Series"] 
// }

// function personInfo(person){
//     let fullName = person.name + " " + person.lastName;
//     let hobNumber = person.hobbies.length;
//     console.log(fullName + " is " + person.age + " year old, and has " + hobNumber + " hobbies");
// }

// for (let key in person){
//     console.log(key + " : " + person[key]);
// };
// for (let keybd in person.birthDate){
//     console.log(keybd + " : " + person.birthDate[keybd]);
// };
// for (let keyhb in person.hobbies){
//     console.log(keyhb + " : " + person.hobbies[keyhb]);
// };

// function cal(a, op, b){
//     let rst;
//     if(typeof(a)=="number" && typeof(b)=="number"){
//         if(op=="+"){
//             rst = a + b;
//         }
//         else if(op=="-"){
//             rst = a - b;
//         }
//         else if(op=="/"){
//             if (b!=0){
//                 rst = a / b;
//             }
//         }
//         else if(op=="*"){
//             rst = a * b;
//         }
//         else {
//             console.log("You should enter a valid operateur!");
//         }
//         console.log(rst);        
//     }
//     else{
//         console.log("You should enter numbers only ...");
//     }
// }

// console.log("from 10 to 0");
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// let name = "azaiez";
// let lang ="deutsch";

// if (lang=="englisch") {
//     console.log("hello " + name);
// }
// else if (lang=="deutsch") {
//     console.log("hallo " + name);
// }
// else {
//     console.log("salut " + name);
// }
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
// console.log(ages); //prints array before removing anything for reference//

ages.push(100); //adds new age(100) to the end of array

let lastPosition = ages.length - 1; // states the last variable is at the array length -1

let lastOne = ages[lastPosition]; //states the array value at the last position

console.log(lastOne - ages[0]); // prints index - last value 


console.log(ages); // 

// the function parameter is the ages array//
function ave(ages) {
    
    var sum = 0; //this variable will pass all the values
// // the for loop iterates the array
    for(let i = 0; i < ages.length; i++){
//    // pushed the iterated array values into the sum variable
        sum += ages[i];
          
    }
//divides the array values by the array length
return sum / ages.length;
}
 console.log(ave([9, 23, 64, 2, 8, 28, 93, 100])); // prints average 40.875//

// -----------------------------------------------------------------------------------------

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // names array

var total = 0;
for(var i = 0; i < names.length; i++){
    total+=names[i].length;
}
var average = total/names.length;

console.log(average)

//------------

let newStringArray= "";
for(var i = 0; i < names.length; i++){
  newStringArray += names[i] + " "
}
console.log(newStringArray);

//------------
//How do you access the last element of any array?
console.log(names.length - 1)

//-------------
//How do you access the first element of any array?
console.log(names[0])
//--------------create a new array called "nameLengths" from the "names" array

var nameLengths = [...names];
for(var i = 0; i < names.length; i++){
    nameLengths[i] = names[i].length;
}

console.log(nameLengths)

//--------------- loop to print the sum of the new array

var sum1= 0
for(let i = 0; i < nameLengths.length; i++){
  sum1 += nameLengths[i]; 
}
console.log(sum1)

//-------------------
//Write a function that takes two parameters, word and n, as arguments //
//and returns the word concatenated to itself n number of times//

function concatWordX(word, n) {
    return word.repeat (n);
    }
    
    let newWordString = concatWordX("hey", 3);
    
    console.log(newWordString);

//-------------Write a function that takes two parameters,
// firstName and lastName, and returns a full name.

function firstNamePlusLast(firstName, lastName){
    return firstName + " " + lastName;
}

let firstLast = firstNamePlusLast("Jackie","Delgado");
console.log(firstLast)

//---------Write a function that takes an array of numbers and returns true 
//if the sum of all the numbers in the array is greater than 100.//


let numsA = [40, 41, 42]

let totalAdded = numsA.reduce(function(n,x) {
    return n + x;
},0);

if (totalAdded > 100) {
    console.log("true");
}
else{

    console.log(" the total is not greater than 100");
};

//-----------Write a function that takes an array of numbers 
// and rtrns the avrge of all the elements in the array.


let numsArrayB = [20, 25, 30]
 let aveA = 0;

 for(let i = 0; i < numsArrayB.length; i++) {
    aveA += numsArrayB[i];
 }
let aveB = aveA/numsArrayB.length;
console.log(aveB)





//------Write a function that takes two arrays of numbers and returns true if the average of the 
//elements in the first array is greater than the average of the elements in the second array.

let theNumArray  = [50, 20, 25, 15, 5]
let theNumArray2 = [35, 45, 1, 55, 40]


//--------Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


let isHotOutside = true;
let moneyInPocket = 12;

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket > 10.50){
     return true;
    }
}

console.log(willBuyDrink(isHotOutside, moneyInPocket));


//-------------Create a function of your own that solves a problem. 
let custyNames = ["Darien", "Jesus"]

function writeThanks(names, shop) {
    return names.map(names=> `${names} Thank you for shopping with us at ${shop}!`)
}
console.log(writeThanks(custyNames, "Plant Planet"));

// I created this function to write a thank you messgae to all New Customers, instead of typing it out one by one this
//function will automate it.
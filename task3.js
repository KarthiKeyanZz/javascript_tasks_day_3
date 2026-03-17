//===========================================================================================================================
// BASIC TASK
//===========================================================================================================================

// Task : 1

// Take a string number from prompt and convert it to number, then add 10 and print the result.

let num1 = prompt("enter your number")
console.log(typeof(num1))
console.log(Number(num1) + 10)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 2

// Take two numbers using prompt, convert them using Number() and print their sum.

let num2 = Number(prompt("enter number 1"))
let num3 = Number(prompt("enter number 2"))
console.log(num2 + num3)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 3

// Take a user input value and print whether it becomes true or false using Boolean().

let user_val = Number(prompt("enter value"))
console.log(Boolean(user_val))

//---------------------------------------------------------------------------------------------------------------------------

// Task : 4

// Convert "123" to number and multiply by 5.

console.log(Number("123") * 5)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 5

// Convert true and false into numbers and print the result.

console.log(Number(true))
console.log(Number(false))

//---------------------------------------------------------------------------------------------------------------------------

// Task : 6

// Take a string input and check if it becomes true or false using Boolean().

let str_inp = prompt("Enter a string input")
console.log(Boolean(str_inp))

//---------------------------------------------------------------------------------------------------------------------------

// Task : 7

// Convert "100" and "50" to numbers and find difference.

console.log(Number("100")-Number("50"))

//---------------------------------------------------------------------------------------------------------------------------

// Task : 8

// Convert null, undefined, and "" into numbers and print the result.

console.log(Number(null))
console.log(Number(undefined))
console.log(Number(""))

//---------------------------------------------------------------------------------------------------------------------------

// Task : 9

// Add "10" and 20 and explain why the result happens.

console.log("10" + 20)

//Explanation : Because of string concatenation . Javascript assumes both values are string if a string value is present .

//---------------------------------------------------------------------------------------------------------------------------

// Task : 10

// Convert "25" into number and check if it is greater than 20.

console.log(Number("25")>20)

//---------------------------------------------------------------------------------------------------------------------------

//===========================================================================================================================
//  IF / ELSE TASKS
//===========================================================================================================================

// Task : 11

// Ask user age and check if they are eligible to vote.

let age = Number(prompt("Enter age"))
let canVote = age>=18 ? "You are Eligible" : "You are a Minor"
alert(canVote)
console.log(canVote)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 12

// Take a number and check if it is positive or negative.

let num4 = Number(prompt("Enter number to check positive or negative"))
let result = num4>0 ? "Positive" : "Negative"
alert(result)
console.log(result)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 13

// Check if a number is even or odd.

let num5=Number(prompt("Enter number to check odd or even"))
let result1= num5%2==0 ? "Even":"Odd"
alert(result1)
console.log(result1)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 14

// Take 3 numbers and print the largest number.

let num6=Number(prompt("Enter Number 1"))
let num7=Number(prompt("Enter Number 2"))
let num8=Number(prompt("Enter Number 3"))

let result;

if(num6>=num7 && num6>=num8){
    result=num6
}
else if(num7>=num8 & num7>=num6){
    result=num7
}
else{
    result=num8
}

alert("Largest Number is "+result)
console.log(result)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 15

// Ask user temperature
// above 35 → "Hot day"
// below 20 → "Cold day"
// otherwise → "Normal weather"

let temp=Number(prompt("Enter Temperature"))

if(temp>35){
    alert("Hot Day")
}
else if(temp < 20){
    alert("Cold Day")
}
else{
    alert("Normal Weather")
}

//---------------------------------------------------------------------------------------------------------------------------

// Task : 16

// Check if a student passed or failed (pass mark = 35).

let mark=Number(prompt("Enter Mark"))
let max_mark=100
let pass=mark>=35 && mark<=100? "Student Passed":"Student Failed"
alert(pass)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 17

// Ask username and password and validate login.

let username=prompt("Enter Username")
let password=prompt("Enter Password")

let stored_username="KarthiZz"
let stored_password="k@rthi"

if(username!=stored_username){
    alert("Wrong Username")
}
else if(password!=stored_password){
    alert("Wrong Password")
}
else if(username==stored_username && password==stored_password){
    alert("Successfully Logged in")
}

//---------------------------------------------------------------------------------------------------------------------------

// Task : 18

// Check if a year is leap year.

let year=Number(prompt("Enter year to check leap"))
let checkLeap=(year%4==0 && year%100!=0) || (year%400==0) ? "Leap Year" : "Not Leap"
alert(checkLeap)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 19

// Ask user time (24 hours) and show
// Morning / Afternoon / Evening / Night.

let time=Number(prompt("Enter Time"))
let checkTime

if(time >= 5 && time < 12){
    checkTime="Morning"
}
else if(time>=12 && time < 16){
    checkTime="Afternoon"
}
else if(time>=16 && time<19){
    checkTime="Evening"
}
else if((time>=19 && time<=24) || (time > 0 && time < 5)){
    checkTime="Night"
}
else{
    checkTime="Invalid Time"
}
alert(checkTime)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 20

// Ask salary and calculate tax
// 50000 → 20% tax
// 30000 → 10% tax
// else → no tax.

let salary=Number(prompt("Enter your salary"))
let tax

if(salary >= 50000){
    tax=(20/100)
}
else if(salary >= 30000){
    tax=(10/100)
}
else{
    tax=0
}

let calculate_tax=salary-(salary*tax)
alert("Deducted tax and salary " + calculate_tax + " " + "tax :" + (salary*TextTrackCueList))

//---------------------------------------------------------------------------------------------------------------------------

//===========================================================================================================================
// LOOP TASKS
//===========================================================================================================================

// Task : 21

// Print numbers 1 to 10 using for.

for(let i=1;i<=10;i++){
    console.log(i)
}

//---------------------------------------------------------------------------------------------------------------------------

// Task : 22

// Print 10 to 1 countdown.

for(let i=10;i>0;i--){
    console.log(i)
}

//---------------------------------------------------------------------------------------------------------------------------

// Task : 23

// Print even numbers from 1–50.

for(let i=1;i<51;i++){
    if(i%2==0){
        console.log(i)
    }
}

//---------------------------------------------------------------------------------------------------------------------------

// Task : 24

// Print odd numbers from 1–50.

for(let i=1;i<51;i++){
    if(i%2!=0){
        console.log(i)
    }
}

//---------------------------------------------------------------------------------------------------------------------------

// Task : 25

// Print multiplication table for a given number.

num_inp=Number(prompt("Enter number for multiplication"))
for(let i=1;i<=10;i++){
    console.log(i + " * " + num_inp + " = " + num_inp*i)
}

//---------------------------------------------------------------------------------------------------------------------------

// Task : 26

// Find sum of numbers from 1–100.

let sum=0

for(let i=1;i<=100;i++){
    sum+=i
}

console.log(sum)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 27

// Find factorial of a number.

let number_input=Number(prompt("Enter Number"))
let factorial=1

for(let i=1;i<=number_input;i++){
    factorial*=number_input
    number_input--
}

console.log(factorial)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 28

// Count how many numbers between 1–100 are divisible by 5.

let count=0

for(let i=1;i<=100;i++){
    if(i%5==0){
        count++
    }
}
console.log(count)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 29

// Print square of numbers from 1–10.

for(let i=1;i<=10;i++){
    console.log(i**2)
}

console.clear()

//---------------------------------------------------------------------------------------------------------------------------

// Task : 30

// Reverse a number using loop.

let number_1=Number(prompt("Enter a number to reverse"))
let rev_num=0

while(number_1>0){
    let remainder=number_1%10
    number_1=Math.floor(number_1/10)
    rev_num=(rev_num*10)+remainder
}

console.log(rev_num)

//---------------------------------------------------------------------------------------------------------------------------

//===========================================================================================================================
// ARRAY TASKS
//===========================================================================================================================

// Task : 31

// Print all elements in array using for of.
// ["apple","banana","orange"]
let fruits=["apple","banana","orange","grape","watermelon"]

for(i of fruits){
    console.log(i)
}

//---------------------------------------------------------------------------------------------------------------------------

// Task : 32

// Count total elements in an array.

console.log(fruits.length)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 33

// Find largest number in array.

let num_arr=[1,90,3,140,5,89,40]
let largest=num_arr[0]

for(let i=1;i<num_arr.length;i++){
    if(num_arr[i]>largest){
        largest=num_arr[i]
    }
}

console.log(largest)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 34

// Find sum of array numbers.

let sum_arr=0

for(let j=0;j<num_arr.length;j++){
    sum_arr+=num_arr[j]
}

console.log(sum_arr)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 35

// Print only even numbers from array.
// Example
// [2,5,8,11,20]
// Output
// 2
// 8
// 20

let num_arr1=[2,5,8,11,20]

//---------------------------------------------------------------------------------------------------------------------------

//===========================================================================================================================
// OBJECT TASKS
//===========================================================================================================================

// Task : 36

// Print all keys and values from object using for in.
// {
// name:"John",
// age:25,
// city:"Chennai"
// }

let employee={
    name:"john",
    age:"25",
    city:"chennai",
    salary:10000
}

for(i in employee){
    console.log(i + " - " + employee[i])
}

//---------------------------------------------------------------------------------------------------------------------------

// Task : 37

// Count how many properties are inside an object.

let count1=0

for(j in employee){
    count1++
}

console.log(count1)

//---------------------------------------------------------------------------------------------------------------------------

// Task : 38

// Check if object contains salary property.

let found=false
for(k in employee){
    if(k.toLowerCase() === "salary"){
        found=true
        break
    }
}

console.log(found ? "found":"not found")

//---------------------------------------------------------------------------------------------------------------------------

// Task : 39

// Print only values from object.

for(l in employee){
    console.log(employee[l])
}

//---------------------------------------------------------------------------------------------------------------------------

// Task : 40

// Create employee object and display employee details.
// Example
// name
// role
// salary
// department


let employee1={
    name:"Shiro",
    role:"full stack developer",
    salary:5000,
    department:"IT"
}

for(q in employee1){
    console.log(q + " - " + employee1[q])
}

//---------------------------------------------------------------------------------------------------------------------------
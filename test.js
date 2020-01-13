// console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
// var person = {};
// person['firstname'] = 'Mario';
// person['lastname'] = 'Rossi';
// person['email'] = 'Rossi@gmail.com';

// requiredField = [
//     'firstname',
//     'lastname',
//     //'dob',
//     'email',
//     //'phone'
// ]

// //console.log('>>>',person);
// for (let key in person) {
//     if (requiredField.includes(key) && person[key]) {
//         let rfi = requiredField.indexOf(key)
//         console.log('#######', rfi);
//         requiredField.splice(rfi, 1)
//     }

// }
// if (requiredField.length > 0) {
//     console.log('Fill all the details');
// } else {
//     console.log(new Date(), __filename, '<<<<NjoY>>>>')
// }
// const moment = require('moment')
// const day = moment().format('DD')
// const month = moment().format('MM')
// const year = moment().format('YYYY')

// for (let i = 1; i < 20; i++) {


//     let newCount = i
//     var final = newCount > 9 ? "" + newCount : "0" + newCount;
//     console.log('DID' + day + month + year + final)

// }

// let date = moment().format('DD-MM-YYYY')
// console.log('>>>>>>>>>>>>>', date)

// for (let i = 0; i <= 20; i++) {
//     console.log('i value >>>', i)
// }

// process.argv.forEach((data, index) => { console.log(`>>>>>>>>> ${index}>>><<<<${data}`) })

// var date2 = new Date().toLocaleString();
// // Sun Dec 17 1995 03:24:00 GMT...

// console.log('date >>>>>>>>>>>', date2);

// let answer = "no"

// switch (answer) {
//     case "no":
//         console.log('Naat Gi/Ga')
//         break
//     case "yes":
//         console.log('Moj hogi')
//         break
//     case "":
//         console.log('Baath dhek ibbe')
//         break
// }
// let obj = { name: 'yes' }
// console.log('=>', /^obj.name/i)



/********************************************* array MAP ************************************************/
// let arr = [{ name: 'mohit', age: 25, height: 6 }, { name: 'gaurav', age: 24, height: 5.6 }, { name: 'ankur', age: 26, height: 5.9 }]
// let map = arr.map(a => a.name)

// console.log('map data ^^^^^^>>', map)
/********************************************************************************************** */

// function like() {
//     // n++
//     // arr.push(n++)

//     // return n
//     return console.log('hellA')
// }

// like()

// let num = 0
// num ?
/********************* for loop using recursion********************** */
// function co(i) {
//     if (i < 10) {
//         console.log(i)

//     }
//     co(i++)
// }
// co(1)
/********************************************************************/

/**********************factory function******************************/
// function createCircle(radius) {
// return {
// radius: radius,
// draw: function() {
// console.log('hi this factory function')
// }
// }
// }

// console.log(createCircle(1))

/*******************constructor function **********************/
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('this is draw function')
//     }
// }

// const a = new Circle(2)
// console.log(a)

// for (var i = 0; i < 10; i++) {
//     console.log('==>> ', i)
//     setTimeout(() => {
//         console.log('the number is  ' + i)
//     }, 1000);
// }

// const race = '100m dash'
// const winners = ['gaurav', 'ankur', 'mohit']

// const win = winners.map((winner, i) => ({ name: winner, race, place: i + 1 }))

// console.log('--=-=> ', win)

// const ages = [61, 65, 1, 45, 36, 75, 15, 85, ]
// const old = ages.filter(age => age >= 55)
// console.log(old)

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw message')
//     }
// }

// for (let key in circle)
//     console.log(key, circle[key])

// const courses = [
//     { id: 1, name: 'a' }
// ]

// let date = new Date()

// console.log('date =-=-=-=->', date)

// let a = 0

// let b = ++a

// console.log('b vcalue :..', b)

// let arr = [{ id: 1, name: 'mohit', age: 25, height: 6 }, { id: 2, name: 'gaurav', age: 24, height: 5.6 }, { id: 3, name: 'ankur', age: 26, height: 5.9 }]

/************************************************** ARRAY OF OBJECT ***************************************************/


let obj = [{
            "_id": "5dbfddc704730b7629ab5d31",
            "address": {
                "building": "2780",
                "coord": [-73.98241999999999, 40.579505],
                "street": "Stillwell Avenue",
                "zipcode": "11224"
            },
            "borough": "Brooklyn",
            "cuisine": "American",
            "grades": [
                { "date": "2014-06-10T00:00:00.000Z", "grade": "A", "score": 05, id: 1 },
                { "date": "2013-06-05T00:00:00.000Z", "grade": "A", "score": 07, id: 2 },
                { "date": "2012-04-13T00:00:00.000Z", "grade": "A", "score": 12, id: 3 },
                { "date": "2011-10-12T00:00:00.000Z", "grade": "A", "score": 12, id: 4 }
            ],
            "name": "Riviera Caterer",
            "restaurant_id": "40356018"
        },
        {
            "_id": "5dbfddc704730b7629ab5d31",
            "address": {
                "building": "2780",
                "coord": [-73.98241999999999, 40.579505],
                "street": "Stillwell Avenue",
                "zipcode": "11224"
            },
            "borough": "Brooklyn",
            "cuisine": "American",
            "grades": [
                { "date": "2014-06-10T00:00:00.000Z", "grade": "A", "score": 05, id: 1 },
                { "date": "2013-06-05T00:00:00.000Z", "grade": "A", "score": 07, id: 2 },
                { "date": "2012-04-13T00:00:00.000Z", "grade": "A", "score": 12, id: 3 },
                { "date": "2011-10-12T00:00:00.000Z", "grade": "A", "score": 12, id: 4 }
            ],
            "name": "Riviera Caterer",
            "restaurant_id": "40356018"
        }
    ]
    // console.log('===-=-=-=>', typeof(array));
obj.forEach(element => {
    console.log(' found -+-+-+--+-+-++++++++++++++++++++++---------->', element.name)
    let b = element.grades.map(a => a.id)
        // console.log('####################*********************>>>>>>>>>>>>>>>>>>>', b)

});

// if (a.includes(1)) {
//     console.log('<-=-=-=-= YES =-=-=->')
// } else {
//     console.log('<-=-=-=-= Nothing =-=-=->')
// }

// let map = obj.grades.map(a => a.id)

// console.log('map data ^^^^^^>>', map)

/*************************forEach example********************************/
// function logMapElements(value, key, map) {
//     console.log(`m[${key}] = ${value}`);
//   }

//   new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
//     .forEach(logMapElements);

// expected output: "m[foo] = 3"
// expected output: "m[bar] = [object Object]"
// expected output: "m[baz] = undefined"


/*********************************** recursion function *************************************/

// function factorial(n) {
//     var result = 1;
//     for (let i = n; i > 1; i--) {
//         result *= i;
//     }
//     return result;
// }
//////////// alternate  /////////////
// function factorial(n) {
//     if (n <= 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// let a = factorial()

// console.log('..', a)
/************************************************************************************/

// let awb = { name: 'string' }

// var ship = typeof(awb) == 'object' ? awb : [awb]
//     // let ship = typeof(awb)
// console.log(ship)

// display = 'mohit'

// console.log('----', display)

// /******************************* Array of Object (deep) **************************************/
// let obj = [{
//         "_id": "5dbfddc704730b7629ab5d31",
//         "address": {
//             "building": "2780",
//             "coord": [-73.98241999999999, 40.579505],
//             "street": "Stillwell Avenue",
//             "zipcode": "11224"
//         },
//         "borough": "Brooklyn",
//         "cuisine": "American",
//         "grades": [
//             { $: { name: 'mohit' }, "date": "2014-06-10T00:00:00.000Z", "grade": "A", "score": 05, id: 1 },
//             { $: { name: 'rohit' }, "date": "2013-06-05T00:00:00.000Z", "grade": "A", "score": 07, id: 2 },
//             { $: { name: 'sohit' }, "date": "2012-04-13T00:00:00.000Z", "grade": "A", "score": 12, id: 3 },
//             { $: { name: 'ram' }, "date": "2011-10-12T00:00:00.000Z", "grade": "A", "score": 12, id: 4 }
//         ],
//         "name": "Riviera Caterer",
//         "restaurant_id": "40356018"
//     },
//     {
//         "_id": "5dbfddc704730b7629ab5d31",
//         "address": {
//             "building": "2780",
//             "coord": [-73.98241999999999, 40.579505],
//             "street": "Stillwell Avenue",
//             "zipcode": "11224"
//         },
//         "borough": "Brooklyn",
//         "cuisine": "American",
//         "grades": [
//             { $: { name: 'shyam' }, "date": "2014-06-10T00:00:00.000Z", "grade": "A", "score": 05, id: 5 },
//             { $: { name: 'ghanshyam' }, "date": "2013-06-05T00:00:00.000Z", "grade": "A", "score": 07, id: 6 },
//             { $: { name: 'shejram' }, "date": "2012-04-13T00:00:00.000Z", "grade": "A", "score": 12, id: 7 },
//             { $: { name: 'ramavatar' }, "date": "2011-10-12T00:00:00.000Z", "grade": "A", "score": 12, id: 8 }
//         ],
//         "name": "Riviera Caterer",
//         "restaurant_id": "40356018"
//     }
// ]

// obj.forEach(item => {
//     console.log('item value :--', item.grades)

// })

// for (let i = 0; i < obj.length; i++) {
//     obj[i].grades.forEach(item => {
//         // console.log('item value :--', item)
//         if (item['$']['name'] == 'mohit') {
//             key = item['_'] //if name is awb_number then push awb number in key
//             console.log('here-=-=-==-=->', key)

//         }
//     })
// }

// var request = require('request');
// request('http://www.google.com', function(error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });


// function factorial(n) {
//     var result = 1;
//     for (let i = n; i > 1; i--) {
//         result *= i;
//     }
//     return result;
// }
////////// alternate  /////////////
// function factorial(n) {
//     if (n <= 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// let a = factorial(6)

// console.log('..', a)
/*******************************************************************/

// let file = {
//     mimetype: 'image/png'
// }
// const filetypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
// if (filetypes.includes(file.mimetype)) {
//     console.log('0-0-0-0-0-0-0-0-0-> macthed')
// } else {
//     console.log('0-0-0-0-0-0>', new Error())
//         // return cb('Error: Images Only!')
// }
// const check = filetypes.map(e => {
//     // console.log(';;;;;;', e)
//     file.mimetype = e
// })

// let oneByone = k => {
//     // filetypes.forEach(e => {
//     //     return file.mimetype = e
//     // })
//     // console.log('hi im here')
//     oneByone(k + 1)
//         // console.log('-=-=-=-=-=-=-=-=-=->')
// }
// oneByone(0)
// console.log('0-0-0-0-0-0-0-0->', check)
// console.log('0-0-0-0-0-0-0-0->', file.mimetype)

// let a = 'abc'
// let b = 'xyz'
// let c

// console.log('=-=-=-=-=->', c)
// if ((!a || !b) && (!c || c == undefined || c == null)) { // condition get false
//     console.log('stop')
// } else {
//     console.log('continue')
// }
// let a = 'HSHG'
// console.log('-=-=-=-=-=-=-=-=->', a.toLowerCase())


/************************************************** ANKUR JAVASCRIPT TEST ****************************************************/


// question 1.                                                                                   --------- Wrong -- 2.done
// let arr = [10, 051, 50, 510, 21, 0621, 1, 4851, 54, 445, 548, 844]

// function find(search) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])

//     }
//     // if (search.toLowerCase() == 'max') {

//     // } else {

//     // }

// }
// console.log('^^^^^^^^^^^^>', find('max'))

// Question 2.                                                                                       -------- Done
// let arr = [1, 2, 3, 4]

// let b = arr.map(ele => 2 * ele)

// console.log(b)

//Question 3.                                                                           ------- Incomplete
// let arr = [10, 051, 50, 510, 21, 0621, 1, 4851, 54, 445, 548, 844]                          

// function add(variable) {
//     console.log('here')
//     arr.push(variable)
// }

// function remove() {
//     arr.pop()
// }

// // console.log('add', add(777), arr)
// console.log('remove', remove(), arr)

// Question 4                                                                           -------------  Done
// let arr = [10, 051, 50, 510, 21, 0621, 1, 4851, 54, 445, 548, 844]
// for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i])
// }

//Question 5.                                                           --------- Wrong
// let arr = [10, 051, 50, 510, 21, 0621, 1, 4851, 54, 445, 548, 844]
// arr.reduce((a,c)=> {
//     a = a
// })
// for (let i = 0; i <= arr.length; i++) {
//     let sum;
//     sum = arr[i]

//     console.log('sum', sum)
// }


//Question 6.                                                   ----------   Wrost
// let mycolor = ["Red", "Green", "White", "Black"];
// // let up = myColor[0] + ',' + myColor[1] + ',' + myColor[2] + ',' + myColor[3]
// // up = 
// // up = myColor[3]
// for (let i = 0; i < mycolor.length; i++) {
//     console.log('sum', mycolor.join(mycolor[i]))
// let up = myColor[1]
// console.log('sum', up)
// }


// Question 7.                                                          ----------  wrong
// var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1, 3984723, 200, 400, 37864];
// console.log(arr1.sort())


// Question 8.                                                              ---------- Wrong but Important

// var library = [ 
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//     ];

// function search(id){
//     return library.find({libraryID : id})
// }

// console.log(search(1254))

// Question 9                                                                   --------------  Wrong
// let array = [NaN, 0, 15, false, -22, '', undefined, 47, null]
// for (let i = 0; i < array.length; i++) {
//     if (array[i] == true) {
//         console.log('arr true', array)
//     } else if (array[i] == false) {
//         console.log('false=-=-', array[i])
//     }
// }

// Question 10                                                              ----------------- Wrost
// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];
// console.log(array1.join(array2))



/****************************************************  Practice  ********************************************************/
// let $key = { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 }
// let x = 'author';
// console.log('key data=-=-=-=->', $key[x])

// let array1 = [1, 2, 3];
// array1.

// var library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
// ];

// for (let index of library) {
//     // console.log('array data -=-=-=->', index)
//     for (let key in index) console.log('answers:-=-=->', key, ': ', index[key])
// }

// for (let key in library) console.log('answers:-=-=->', key, library[key])



/****************************************** Mosh Hamedani Control flow Exercise *************************************************/

// Question 1 :- write a function that take two number and returns the maximum of the two.

// Question 2 :- write a function that determines if the image is landscape or not.

// Question 3 :- Write fizzBuzz algo (a function), If the number we are passing is divisible by 3, we get Fizz. If divisible by 5, we get Buzz and the is divisible by both 3 & 5, we get fizzBuzz and If the number is not divisible by 3 & 5, we get same number and we pass a string,boolean or anything thats not a number we should get a message 'Not a Number'.

// Question 4 :- write a function that takes a parameter that's the speed of a car. Speed limit is 70 kmph. If car is driving under or equal to the speed limit then its OK. Now for every five kilometer above the speed limit, they're gonna get 1 point. Example:- One drive at 75 kmph, then he will get 1 point here. But what if he drive at 72kmph? Its still OK . Now if the driver gets more than 12 points, then his license got suspended (HINT :- for calculations use  built in function of javascript Math.floor( )).

// Question 5. write a function that takes a parameter called limit. so we pass a number here, like 10, & when we call this function, we should call all the numbers from 0 to the number we supplied as the limit. Now next to each number if that number is even we should display even number , otherwise we should display odd number.

// Question 6. Write a function called countTruthy which takes array and return the number of truthy element in this array. 
// (  Falsy value are :- [ undefined, null, '', false, 0, NaN] , now expect falsy value all others are Truthy value)

// Question 7. Write a function that show properties of an object which are of type string.

// Question 8. Write a function in which we pass a limit(example 10) parameter which return the sum of all the multiples of 3 & 5 from 0 up to this limit. Example :- multiples of 3 & 5 between 0 & 10(limit). multiples of 3 :- 3,6,9 & Multiples of 5 :- 5,10. Now if we add these all number together we get sum of 33. So thats the job of this function.

// Question 9. Write a function to calculate the grade of a student. here are marks of student [80,80,50] in different subject.
// // ( HINTS )
// // first its calculate average grade. example (80+80+50)/3 = 70 , so average is 70.
// // Average Table 
// // 0-59 : F
// // 60-69 : D
// // 70-79 : c
// // 80-89 : B
// // 90-100 : A

// Question 10. Write a function which give o/p as star. Example :- If we pass 5 in parameter we should get
// /**
//  *  *
//  *  **
//  *  ***
//  *  ****
//  *  *****
//  */

// Question 11. Write a function which takes a parameter as limit and show all the prime number upto that limit. Example :- Prime number upto 20 is 2,3,5,7,11,13,17,19

// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php


/************************************************* ARRAY Exercise ***************************************************/

// Question 1:- write a function which takes two parameters 'min' & 'max' and when we run this program we get an array in which we have numbers from min to max. Example:- min = 1; max = 5; output = [1,2,3,4,5 ]

// Question 2:- write a function which takes an array & element and check that element is present in that an array. If exists then return True else False. (Don't use 'includes' or 'indexOf' library function).

// Question 3:- write a function which takes two array ( arr1 = [1,2,3,4,5,6] & arr2 = [2]). By passing the second array we should get result in an array except that number which was passed in arr2. Example:- result = [1,3,4,5,6]

// Question 4:- write a function



/**************************************************** Practice ************************************************************/

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// squared(5) ➞ 25

// squared(9) ➞ 81

// squared(100) ➞ 10000
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.

// function getContainer(product) {
//     let container
//     switch (product) {
//         case "Bread":
//             container = "bag"
//             break
//         case "Beer":
//         case "Milk":
//             container = "bottle"
//             break
//         case "Cerials":
//             container = "box"
//             break
//         case "Eggs":
//             container = "carton"
//             break
//         case "Candy":
//             container = "plastic"
//             break
//         default:
//             container = null
//     }

//     return container
// }

// console.log(getContainer('Candy'))

// function returnEndOfNumber(num) {

// }

// let todayDate = new Date();
// let date = todayDate.getDate()
// let day = todayDate.getDay()
//     // let yesterdayDate = new Date().setDate(todayDate.getDate() - 1);

// // let startDate = new Date(yesterdayDate).setHours(14, 0, 0, 0);
// // let endDate = new Date().setHours(14, 0, 0, 0);

// console.log('startDate :-', day)

// function hello() {
//     { return "hello edabit.com" }
// }
// console.log(hello())

// function squaed(a) {
//     return a * a;
// }
// console.log(squaed(9))


// console.log(calsi(5, 10, '*'))

// let num1 = 8;
// let num2 = 45;

// total = num1 + num2

// console.log((total < 100))

// function lessThan100(a, b) {
//     total = a + b
//     console.log((total < 100))
// }

// lessThan100(-15, -21)

// function calsi(num1, num2, operator) {
//     if (operator == '+') return num1 + num2
//     if (operator == '-') return num1 - num2
//     if (operator == '/') {
//         if (num2 === 0) {
//             return "Can't divide by 0!"
//         } else {
//             return num1 / num2
//         }
//     }
//     return num1 * num2
// }

// function fact(num) {
//     let temp = 1;

//     for (let i = 1; i <= num; i++)
//         temp = temp * i
//     return temp
// }

// console.log(fact(5))

// arr = []

// function sumOfCubes(nums) {
//     let temp = 0;
//     for (let value of nums) {
//         // console.log(value * value)

//         // let a = Math.pow(value, 3)
//         let a = value * value * value
//         temp += a
//             // console.log('temp after', a)
//     }
//     return temp
// }

// console.log(sumOfCubes(arr))

// function matchHouses(step) {
//     return step === 0 ? 0 : 5 * step + 1;
// }

// console.log(matchHouses(1))
// function table(num) {
//     for (let i = num; i <= num; i++) {
//         // console.log('i : -', i)
//         for (let j = 1; j <= 10; j++) {
//             console.log(` ${i} X ${j} = `, i * j)
//         }
//     }

// }

// table(16818)

// let a = 3;
// let b = 5;

// let total = 0;
// for (let i = 0; i < 1000; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//         total += i
//     }
// }
// console.log(total)

// function star(num) {
//     let temp = ''
//     for (let i = 1; i <= 5; i++) {
//         temp += '*'
//         console.log(temp)
//     }
// }

// star(6)

// console.log(isHappy(49))

// function isHappy(num) {
//     let temp = 1;

//     let string1 = num.toString().split('')
//     for (let key of string1) {
//         // console.log(key)
//         temp *= key
//     }
//     return temp
//         // console.log(temp)
//         // if (temp == 1) {
//         //     console.log('yes')
//         //     return temp
//         // } else {
//         //     let temp2 = 1;
//         //     let string2 = temp.toString().split('')
//         //     for (let key2 of string2) {
//         //         // console.log(key2)
//         //         temp2 *= key2
//         //     }
//         //     return temp2
//         // }

//     // console.log('t1', temp)
//     // if (num !== 1) {
//     //     console.log('t2', temp)
//     //     isHappy(num)
//     // } else {
//     //     console.log('t3', temp)
//     //     return temp
//     // }
// }


// function happy_number(num) {
//     var m, n;
//     var c = [];

//     while (num != 1 && c[num] !== true) {
//         c[num] = true;
//         m = 0;
//         while (num > 0) {
//             n = num % 10;
//             m += n * n;
//             num = (num - n) / 10;
//         }
//         num = m;
//     }
//     return (num == 1);
// }

// var cnt = 15;
// var num = 1;
// var f5 = '';
// while (cnt-- > 0) {
//     while (!happy_number(num))
//         num++;
//     f5 = f5 + (num + ", ");

//     num++;
// }
// console.log('First 5 happy numbers are : ' + f5);

// var num = 213;
// console.log("Output : " + num.toString());

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let key of array) {
//     if (key % 2 == 0) {
//         console.log(key, ' is even')
//     } else {
//         console.log(key, ' is odd')
//     }
// }

// let marks = [80,77,88,95,68];



// let David = 80;
// let Vinoth = 77;
// let Divya = 88;
// let Ishitha = 95;
// let mohit = 98;

// let avg = (David + Vinoth + Divya + Ishitha + mohit) / 5
// console.log(avg)

// if (avg < 60) console.log('F')
// else if (avg < 70) console.log('D')
// else if (avg < 80) console.log('C')
// else if (avg < 90) console.log('B')
// else console.log('A')

// let a = 3;
// let b = -7;
// let c = 2;
// let d = 45;
// let e = -89;

// if(a > b && a)

// if(a > b && a > c && b > c){
//     console.log( a , ',' , b , ',' , c)
// }else if(b > a && b > c && a > c)

// var x = 10;
// var y = 1;
// var z = -4;
// if (x > y && x > z) {
//     if (y > z) {
//         console.log(x + ", " + y + ", " + z);
//     } else {
//         console.log(x + ", " + z + ", " + y);
//     }
// } else if (y > x && y > z) {
//     if (x > z) {
//         console.log(y + ", " + x + ", " + z);
//     } else {
//         console.log(y + ", " + z + ", " + x);
//     }
// } else if (z > x && z > y) {
//     if (x > y) {
//         console.log(z + ", " + x + ", " + y);
//     } else {
//         console.log(z + ", " + y + ", " + x);
//     }
// }


// console.log(show())

// function show(a,b,c) {

// }




// var today = new Date();
// var dd = today.getDate();

// var mm = today.getMonth() + 1;
// var yyyy = today.getFullYear();
// if (dd < 10) {
//     dd = '0' + dd;
// }

// if (mm < 10) {
//     mm = '0' + mm;
// }
// today = mm + '-' + dd + '-' + yyyy;
// console.log(today);
// today = mm + '/' + dd + '/' + yyyy;
// console.log(today);
// today = dd + '-' + mm + '-' + yyyy;
// console.log(today);
// today = dd + '/' + mm + '/' + yyyy;
// console.log(today);



// var today = new Date();
// var day = today.getDay();

// var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
// console.log("Today is : " + daylist[day] + ".");
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();
// console.log('hour:-', hour, 'minute:-', minute, 'second:-', second)

// var prepand = (hour >= 12) ? " PM " : " AM ";
// hour = (hour >= 12) ? hour - 12 : hour;

// if (hour === 0 && prepand === ' PM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Noon';
//     } else {
//         hour = 12;
//         prepand = ' PM';
//     }
// }
// if (hour === 0 && prepand === ' AM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Midnight';
//     } else {
//         hour = 12;
//         prepand = ' AM';
//     }
// }
// console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);


// op = search(arr1, 'min')
// console.log(op)

// function search(array, sort) {
//     let lowest = 0;
//     let maximum = 0;
//     if (sort.toLowerCase() == 'min') {
//         for (let key of array) {
//             if (key > 1) {
//                 // console.log('done')
//             } else {
//                 lowest = key
//             }
//         }
//         return lowest
//     } else {
//         for (let key of array) {
//             if (key >= maximum)
//                 maximum = key;
//             else console.log('done')
//         }
//         return maximum
//     }
// }

// let arr1 = [1, 2, 3, 4, 5];

// // console.log(add(arr1, 6))
// console.log(remove(arr1, 6))

// // function add(array, num) {
// //     last = array[array.length - 1]
// //     array.splice(last, 0, num)
// //     return array
// // }

// function remove(array, num) {
//     last = array[array.length - 1]
//     array.splice(last, 1)
//     return array
// }

// let arr1 = [1, 2, 3, 4, 5];

// console.log(sum(arr1))

// function sum(array) {
//     let final = 0;

//     for (let value of array) {
//         final += value
//     }
//     return final
// }

// myColor = ["Red", "Green", "White", "Black"];

// console.log(join(myColor))

// function join(array) {
//     let final = '';

//     for (let value of array) {
//         final = final + value + ','
//         console.log(final)
//     }
//     return final
// }

// let arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1, 3984723, 200, 400, 37864];

// console.log(sort(arr1))

// function sort(array) {
//     let final = 0;
//     let op = [];

//     for (let key of array) {
//         if (key > final) {
//             op.push(key)
//         }
//     }
//     return op
// }

// let array1 = [NaN, 0, 15, false, -22, '', undefined, 47, null]


// function booleanType(kind) {
//     let result = [];
//     let falsy = [];

//     if (kind == 'true') {
//         for (let key of array1) {
//             if (key) {
//                 result.push(key)
//             }

//         }
//         return result;
//     } else {
//         for (let key of array1) {
//             if (!key)
//                 falsy.push(key)
//         }

//         return falsy;
//     }

// }

// console.log(booleanType('false'))

// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];

// console.log('uniqueArray :-', mergeArray(array1, array2));


// function mergeArray(array1, array2) {
//     let final = array1.concat(array2);
//     let uniqueArray = [];
//     // for (let index of array1) {
//     //     final.push(index)

//     // }
//     // for (let key of array2) {
//     //     final.push(key)

//     // }

//     for (let i = 0; i < final.length; i++) {
//         if (uniqueArray.indexOf(final[i]) === -1) {
//             uniqueArray.push(final[i])
//         }
//     }
//     return uniqueArray
// }

// var lib = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
// ];

// console.log(search(4264, lib))

// function search(ID, library) {
//     // console.log('=-here=-', ID, library)
//     if (ID.libraryID === library.libraryID) {
//         return library
//     }
// }

// const inventory = [
//     { name: 'apples', quantity: 2 },
//     { name: 'bananas', quantity: 0 },
//     { name: 'cherries', quantity: 5 }
// ];

// function isCherries(fruit) {
//     return fruit.name === 'cherries';
// }

// console.log(inventory.find(isCherries));

// const number = [1, 2, 1, 2, 3, 4];
// const output = except(number, [1, 2]);

// console.log(output)

// function except(array, excluded) {
//     let final = [];

//     for (let key of array) {
//         if (!excluded.includes(key))
//             final.push(key)

//     }
//     return final
// }

// const number = [1, 2, 3, 4];
// const output = move(number, 1, -2);

// console.log(output);

// function move(array, index, offset) {
//     let final = [...array];
//     // indexOf(offset)
//     return final.splice(offset)

// }



// let arr1 = [1, 2, 3, 4, 5, 6];
// // arr1.splice(-1, 1)
// // console.log(arr1)

// let arr2 = [4, 6];

// // const combined = [...arr1, ...arr2]
// // const copy = [...combined]
// // console.log(copy)

// function except(array, excluded) {
//     let final = [];

//     for (let value of array) {
//         if (!excluded.includes(value)) {
//             final.push(value)
//         }
//     }
//     return final
// }

// let result = except(arr1, arr2)
// console.log(result)


// function except(ar1, ar2) {
//     for (let value2 of ar2) {
//         // let result = arr1;
//         for (let value1 of ar1) {

//             console.log('value1:-=-=-=-=->', value1)
//             let index = ar1.indexOf(value2)

//             if (index == -1) {

//                 return console.log('done')
//             } else {
//                 console.log('value2:-=-=-=-=->', value2)
//                 console.log(index)
//                 ar1.splice(index, 1)
//                     // return ar1
//             }

//         }
//     }
//     // result = ar1

// }

// console.log(except(arr1, arr2))

// const num = [1, 2, 3, 'a', 4, 'b', 5, 6];
// const searchEle = 55;

// console.log(num.indexOf(searchEle))

// function includes(num, searchEle) {
//     if (num.indexOf(searchEle) == -1) console.log(false)
//     else if (num.indexOf(searchEle !== -1)) console.log(true)

//     // let match;
//     // for (let i = 0; i <= num.length; i++) {
//     //     // num[i]
//     //     let a = num.indexof(5)
//     //     console.log(a)
//     // }
//     // return match

//     // return num.indexOf(searchEle) ? true : false
// }
// includes(num, searchEle)

// const num = arrayFromRange(-10, 5);

// console.log(num)

// function arrayFromRange(min, max) {
//     let arr = []
//     for (let i = min; i <= max; i++) {
//         arr.push(i)
//     }
//     return arr
// }

// let num = 10;

// function inc(num) {
//     num++;
//     console.log('-=-=>', num)
// }

// inc(num)
// console.log(num)


// showPrime(5)

// function showPrime(limit) {
//     for (let number = 2; number <= limit; number++) {
//         console.log('number outof loop --->', number)
//         let isPrime = true
//         for (let factor = 2; factor < number; factor++) {
//             console.log('number --->', number)
//             console.log('factor ----->', factor)
//             if (number % factor == 0) {
//                 isPrime = false;
//                 // console.log('Non Prime', number)
//                 // break;
//             }
//         }

//         // if (isPrime) console.log('this here', number)
//     }

//     // console.log(arr)
// }

// showStar(15)
// function showStar(rows) {
//     let a = ''
//     for (let i = 1; i <= rows; i++) {
//         a += '*'
//         console.log(a)
//     }
// }


// const marks = [80, 80, 80]

// calculateGrade(marks)

// function calculateGrade(marks) {
//     let a = 0;
//     for (let sum of marks) {
//         a += sum
//     }
//     let average = a / marks.length
//         // console.log('-=-=>', average)
//     if (average >= 0 && average <= 59) console.log('F')
//     else if (average >= 60 && average <= 69) console.log('D')
//     else if (average >= 70 && average <= 79) console.log('C')
//     else if (average >= 80 && average <= 89) console.log('B')
//     else console.log('A')
// }

// console.log(sum(10))
// function sum(limit) {
//     let arr = []
//     for (let i = 1; i <= limit; i++) {
//         if (i % 3 === 0) arr.push(i)
//         if (i % 5 === 0) arr.push(i)
//     }
//     let a = 0;
//     for (let add of arr) {
//         // console.log('=-=-=-', add)
//         a += add
//     }
//     // console.log('-=-=-=-=-=->', a)
//     return a
// }

// const obj = {
//     title: 'a',
//     releaseYear: 2019,
//     director: 'b',
//     rating: 4.5
// }

// // console.log('-=-=-=-=->', obj['title'])

// showProp(obj)

// function showProp(obj) {
//     // let temp = {}
//     for (let value2 in obj)
//         if (typeof(obj[value]) == "string")
//             console.log('-=-=-=-=->', value, ':-', obj[value])
// }

// const arr = [undefined, -1, -52, null, '', false, 0, NaN, 0, 1, 2, 3, 4, 5]
//     // console.log(false == false)
// countTruthy(arr)

// function countTruthy(array) {
//     let count = 0;
//     for (let index of array) 
//         if (index) ++count;

//     // console.log('true :-',     co  unt)
// }

// console.log('=-=-=-=>', typeof(NaN))

// console.log(arr.length)

// function display(limit) {
//     for (let i = 1; i <= limit; i++) {
//         // if (i % 2 == 0) console.log(`${i} , even`)
//         // else console.log(`${i} , odd`)
//         let msg = (i % 2 === 0) ? "EVEN" : "ODD";
//         console.log(i, msg)
//     }
// }
// display(10)
// function checkSpeed(speed) {
//     if (speed < 75) return 'ok'
//     else {
//         let points = Math.floor((speed - 70) / 5)
//         return (points < 12) ? `You got ${points}` : 'License Suspended'
//     }
// }

// console.log('status :-', checkSpeed(129))


// function max(num1, num2) {
//     if (num1 > num2) return num1
//     else return num2
// }
// more clean code
// function max(num1, num2) {
//     if (num1 > num2) return num1
//     return num2
// }
// cleanest
// function max(num1, num2) {
//     return (num1 > num2) ? num1 : num2
// }
// console.log('answer =-=-=->', max(5, 8))

// function isLandscape(width, height) {
//     return (width > height)
// }

// console.log('is Landscape :-', isLandscape(800, 5555))

// function fizzBuzz(input) {
//     if (typeof(input) == "number") {
//         if (input % 3 == 0 && input % 5 == 0) return 'fizzBuzz'
//         else if (input % 3 == 0) return 'fizz'
//         else if (input % 5 == 0) return 'Buzz'
//         return input
//     } else return 'Not a number'
// }

// console.log('answer :-=-=-=->', fizzBuzz(551))
//     // console.log('answer :-=-=-=->', typeof(4))

// let obj = {
//     street: 'old lane',
//     city: 'ggn',
//     zipcode: 122001
// }

// showAdd(obj)

// function showAdd(object) {
//     // console.log('----->', object)
//     for (let value in object) {
//         console.log(value, ':-', object[value])
//     }
// }

// let add1 = {
//     street: 'old lane',
//     city: 'ggn',
//     zipcode: 122001
// }

// let add2 = {
//     street: 'old lane',
//     city: 'ggn',
//     zipcode: 122001
// }


// function areEqual(ad1, ad2) {
//     return ad1.street === ad2.street && ad1.city === ad2.city && ad1.zipcode === ad2.zipcode

// }

// console.log(areEqual(add1, add2))

// function areSame(ad1, ad2) {
//     console.log(ad1 === ad2)
// }

// areSame(add1, add2)

// function areEqual(ad1, ad2) {
//     for (let value in ad1) {
//         for (let value2 in ad2) {
//             console.log((ad1[value] === ad2[value2]))
//         }
//         // console.log(value, ':-', add1[value])
//     }
// }

// areEqual(add1, add2)
// let num = [1, 2, 3, 'a']
// let a = num.join('')
//     // console.log(a)
// let mgs = 'this is just random stuff'
// let b = mgs.split(' ')

// let c = b.join(' ')
// console.log(c)

// let num = [2, 3, 5, 1, 4]
// console.log(num.reverse())
// console.log(num.sort())

// let courses = [
//     { id: 1, course: 'Node.js' },
//     { id: 2, course: 'javascript' }
// ];

// courses.sort((a, b) => {
//     let nameA = a.course.toLowerCase();
//     let nameB = b.course.toLowerCase();
//     if (nameA > nameB) return 1;
//     if (nameA < nameB) return -1;
//     return 0
// })
// console.log(courses)

/******************* File System *********************/

const fs = require('fs')

let files = fs.readdirSync('./')
console.log(files)
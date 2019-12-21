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
//             { "date": "2014-06-10T00:00:00.000Z", "grade": "A", "score": 05, id: 1 },
//             { "date": "2013-06-05T00:00:00.000Z", "grade": "A", "score": 07, id: 2 },
//             { "date": "2012-04-13T00:00:00.000Z", "grade": "A", "score": 12, id: 3 },
//             { "date": "2011-10-12T00:00:00.000Z", "grade": "A", "score": 12, id: 4 }
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
//             { "date": "2014-06-10T00:00:00.000Z", "grade": "A", "score": 05, id: 1 },
//             { "date": "2013-06-05T00:00:00.000Z", "grade": "A", "score": 07, id: 2 },
//             { "date": "2012-04-13T00:00:00.000Z", "grade": "A", "score": 12, id: 3 },
//             { "date": "2011-10-12T00:00:00.000Z", "grade": "A", "score": 12, id: 4 }
//         ],
//         "name": "Riviera Caterer",
//         "restaurant_id": "40356018"
//     }
// ]
// console.log('===-=-=-=>', typeof array);
// obj.forEach(element => {
//     console.log(' found -+-+-+--+-+-++++++++++++++++++++++---------->', element)
//     let b = element.grades.map(a => a.id)
//     console.log('####################*********************>>>>>>>>>>>>>>>>>>>', b)

// });

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


// question 1.                                                                                   --------- Wrong
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





// Question 1 :- write a function that take two number and returns the maximum of the two.
// Question 2 :- write a function that determines if the image is landscape or not.
// Question 3 :- Write fizzBuzz algo (a function), If the number we are passing is divisible by 3, we get Fizz. If divisible by 5, we get Buzz and the is divisible by both 3 & 5, we get fizzBuzz and If the number is not divisible by 3 & 5, we get same number and we pass a string,boolean or anything thats not a number we should get a message 'Not a Number'
// Question 4 :- write a function that takes a parameter that's the speed of a car. Speed limit is 70 kmph. If car is driving under or equal to the speed limit then its OK. Now for every five kilometer above the speed limit, they're gonna get 1 point. Example:- One drive at 75 kmph, then he will get 1 point here. But what if he drive at 72kmph? Its still OK . Now if the driver gets more than 12 points, then his license got suspended (HINT :- for calculations use  built in function of javascript Math.floor( ))
// Question 5. write a function that takes a parameter called limit. so we pass a number here, like 10, & when we call this function, we should call all the numbers from 0 to the number we supplied as the limit. Now next to each number if that number is even we should display even number , otherwise we should display odd number.
// Question 6. Write a function called countTruthy which takes array and return the number of truthy element in this array. 
// (  Falsy value are :- [ undefined, null, '', false, 0, NaN] , now expect falsy value all others are Truthy value)

const arr = [undefined, null, '', false, 0, NaN, 0, 1, 2, 3, 4, 5]
    // console.log(false == false)
countTruthy(arr)

function countTruthy(array) {
    for (let index of array) {
        // console.log(index)
        // return index
        if (index == false) console.log('false')
        else console.log('true')
    }
}

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
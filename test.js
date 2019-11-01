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
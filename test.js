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

/******************************* Array of Object (deep) **************************************/
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
            { $: { name: 'mohit' }, "date": "2014-06-10T00:00:00.000Z", "grade": "A", "score": 05, id: 1 },
            { $: { name: 'rohit' }, "date": "2013-06-05T00:00:00.000Z", "grade": "A", "score": 07, id: 2 },
            { $: { name: 'sohit' }, "date": "2012-04-13T00:00:00.000Z", "grade": "A", "score": 12, id: 3 },
            { $: { name: 'ram' }, "date": "2011-10-12T00:00:00.000Z", "grade": "A", "score": 12, id: 4 }
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
            { $: { name: 'shyam' }, "date": "2014-06-10T00:00:00.000Z", "grade": "A", "score": 05, id: 5 },
            { $: { name: 'ghanshyam' }, "date": "2013-06-05T00:00:00.000Z", "grade": "A", "score": 07, id: 6 },
            { $: { name: 'shejram' }, "date": "2012-04-13T00:00:00.000Z", "grade": "A", "score": 12, id: 7 },
            { $: { name: 'ramavatar' }, "date": "2011-10-12T00:00:00.000Z", "grade": "A", "score": 12, id: 8 }
        ],
        "name": "Riviera Caterer",
        "restaurant_id": "40356018"
    }
]

// obj.forEach(item => {
//     console.log('item value :--', item.grades)

// })

for (let i = 0; i < obj.length; i++) {
    obj[i].grades.forEach(item => {
        // console.log('item value :--', item)
        if (item['$']['name'] == 'mohit') {
            key = item['_'] //if name is awb_number then push awb number in key
            console.log('here-=-=-==-=->', key)

        }
    })
}
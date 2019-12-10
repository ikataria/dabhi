const mongoose = require("mongoose");

const objectId = mongoose.Types.ObjectId;

let arr = new Array(1).fill(0).map(id => new objectId);

let uniqueElements = arr.filter((id, index, self) => self.indexOf(id) == index);
console.log('objectid////////////////////////////////>', uniqueElements)

console.log("Total: ", arr.length);

console.log("Unique: ", uniqueElements.length)
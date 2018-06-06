const  mongoose = require('mongoose');
const Schema = mongoose.Schema

 // My mongoose model objectChoice
let objectChoice = new Schema({
    markCamera: String,
    modelCamera : String,
    typePhoto: String,
    placePhoto:String,
    picture : String,
    creator : String

    
})
// I export My Model objectChoice 
module.exports = mongoose.model('objectChoice', objectChoice);


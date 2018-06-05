const  mongoose = require('mongoose');
const Schema = mongoose.Schema

 // My model objectChoice
let objectChoice = new Schema({
    markCamera: String,
    modelCamera : String,
    typePhoto: String,
    placePhoto:String,
    picture : String,
    creator : String

    
})

module.exports = mongoose.model('objectChoice', objectChoice);


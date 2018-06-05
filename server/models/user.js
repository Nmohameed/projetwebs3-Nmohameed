const  mongoose = require('mongoose');
const  objectChoice = require('./objectChoice');
const Schema = mongoose.Schema


 // My model userShema
const userSchema = new Schema({

    email : String,
    password : String,
    tableChoice : [{  // My table ho refer to objectChoice
        type : mongoose.Schema.Types.ObjectId,
        ref : 'objectChoice' }]
    
})

module.exports = mongoose.model('user', userSchema, 'users');




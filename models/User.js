const mongoose = require(`mongoose`)

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please Enter an Name"]
    },
    email:{
        type: String,
        required:[true,"Please Enter a Email"]
    },
    contactno:{
        type: Number,
        required:[true,"Please Enter a Contact No"]
    },
    password:{
        type: String,
        required:[true,"Please Enter a Password"]
    },
 
})
module.exports = mongoose.model(`User`,UserSchema);
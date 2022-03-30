const mongoose = require(`mongoose`)

const AdminSchema = new mongoose.Schema({

    email:{
        type: String,
        required:[true,"Please Enter a Email"]
    },
    password:{
        type: String,
        required:[true,"Please Enter a Password"]
    },
 
})
module.exports = mongoose.model(`Admin`,AdminSchema);
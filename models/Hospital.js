const mongoose = require(`mongoose`)

const HospitalSchema = new mongoose.Schema({

    description:{
        type: String,
        required:[true,"Please Enter a Hospital Description"]
    },
    name:{
        type: String,
        required:[true,"Please Enter a Hospital Name"]
    },
    address:{
        type: String,
        required:[true,"Please Enter Hospital Address"]
    },
    beds:{
        type: String,
        required:[true,"Please Enter # of Available Beds"]
    },
    oxygen:{
        type: String,
        required:[true,"Please Enter # of Available Oxygen Cylinder"]
    },
    bloods:{
        type: String,
        required:[true,"Please Enter Available of Bloods"]
    },
    contactno:{
        type: Number,
        required:[true,"Please Enter a Contact No of Hospital"]
    },
    link:{
        type: String,
        required:[true,"Please Enter a Link of Hospital Website"]
    },
    pin:{
        type: Number,
        required:[true,"Please Enter your Hospital Pin"]
    }
    
 
})
module.exports = mongoose.model(`Hospital`,HospitalSchema);
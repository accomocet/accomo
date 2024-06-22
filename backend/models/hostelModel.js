const mongoose=require("mongoose");

const hostelSchema= new mongoose.Schema({
    h_name:{
        type:String,
        required:true,
    },
    h_location:{
        type:String,
        required:true, 
    },
    vacancies:{
        type:Number,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    h_images:{
        type:String,
        required:false,
        default:null,
    },
    rent:{
        type:Number,
        required:true,
        default:1000,
    }
});


module.exports = mongoose.model("Hostels", hostelSchema);


// Hostel name
// location coordinates
// vacancies
// contact
// images?
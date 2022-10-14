const mongoose = require("mongoose");
// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true,
        trim: true,
        lowercase: true,
        sparse: true,
        unique: true,
        // required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
    },
    message: {
        type: String,
        // required: true
    }
},{ versionKey: false })

const contact = new mongoose.model("contact", contactSchema)

module.exports = contact
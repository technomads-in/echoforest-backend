const mongoose = require("mongoose");
// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };

const newsSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        sparse: true,
        // unique: true,
        // required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
    }
},{ versionKey: false })

const newsLetter = new mongoose.model("newsletter", newsSchema)

module.exports = newsLetter
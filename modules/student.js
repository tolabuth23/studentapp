const mongoose = require("mongoose")
const StudentShema = mongoose.Schema({
    studentId: {type: String, required: true, uniqe: true},
    studentName: {type: String, required: true},
    major: {type: String, required: true},
    faculty: {type:String, required: true},
    mobile: {type:String, required: true},
    address: {type: Object, required: true},
    img: {type: String, required: true}

},
{
timestamps: true
}
);

module.exports = mongoose.model("Student", StudentShema);

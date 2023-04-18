const mongoose = require('mongoose');


const listSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minLength : 3
    }
})

const List = mongoose.model("List", listSchema);
module.exports = List;
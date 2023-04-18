const mongoose = require('mongoose');

const taskSchma = mongoose.Schema({
    title: {
        type: String,
        minLength: 3,
        trim: true
    },
    _listId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    completed: {
        type : Boolean,
        default : false
    }
})

const Task = mongoose.model('Task', taskSchma);
module.exports = Task;
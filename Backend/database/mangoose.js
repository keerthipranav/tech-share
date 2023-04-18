const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1:27017/taskmanager").then(()=>
console.log('then ocnnected')).catch((err)=>
{
console.log('found err',err);
});

module.exports = mongoose;
// {useNewUrlParse: true, useUnifiedTopology: true, useFindAndModify: false}
const express = require('express');
const app = express();
const mongoose = require('./database/mangoose');
app.use(express.json());

app.use((req, res,next) => {
    res.header("Access-Control-Allow-Origin", "*"),
    res.header("Access-Control-Allow-Methods", "GET,POST,HEAD,PUT,DELETE,PATCH,PUT"),
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
    next();

});

const Task = require('./database/models/task');
const List = require('./database/models/list');

//app.use(cors());


app.get('/lists',((req,res)=>
{
    List.find().then((list)=>
    {
        res.send(list)
    }).catch((err)=>console.log('get-err',err));

}));

app.post('/lists',((req,res)=>
{
    new List({'title': req.body.title}).save().then((list)=>
    res.send(list).catch((err)=>console.log(err,'podthkbvn')))
}))

app.get('/lists/:listId',((req,res)=>
{
    List.find({_id: req.params.listId}).then((list)=>
    {
        res.send(list)
    }).catch((err)=>console.log('get-err',err));

}))

app.patch('/lists/:listId',((req,res)=>
{
    List.findOneAndUpdate({_id: req.params.listId}, {$set: req.body}).then((list)=>
    {
        res.send(list)
    }).catch((err)=>console.log('get-err',err));

}))


app.delete('/lists/:listId',((req,res)=>
{
    const deleteTask =(list) => List.deleteMany({'_listId': list._id}).then((list)=>
    {
        res.send(list)
    }).catch((err)=>console.log('get-err',err));

     List.findByIdAndDelete(req.params.listId).then((list)=>res.send(deleteTask(list))
    .catch((err)=>console.log('get-err',err)));

   

}));



//For task
app.get('/lists/:listId/tasks',((req,res)=>
{
    Task.find({_id: req.params.listId}).then((list)=>
    {
        res.send(list)
    }).catch((err)=>console.log('get-err',err));

}));

//For task
app.post('/lists/:listId/tasks',((req,res)=>
{
    new Task({'_listId': req.params.listId, 'title': req.body.title}).save().then((list)=>
    {
        res.send(list)
    }).catch((err)=>console.log('get-err',err));

}));

//For task
app.get('/lists/:listId/tasks/:taskId',((req,res)=>
{
    Task.find({'_listId': req.params.listId,'id': req.params._id}).then((list)=>
    {
        res.send(list)
    }).catch((err)=>console.log('get-err',err));

}));

//For task
app.patch('/lists/:listId/tasks/:taskId',((req,res)=>
{
    Task.findOneAndUpdate({'_listId': req.params.listId,'id': req.params._id},{$set: req.body}).then((list)=>
    {
        res.send(list)
    }).catch((err)=>console.log('get-err',err));

}));











app.listen(3200,()=>console.log('server started'));
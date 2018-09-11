//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b9520d87fdd7a54e0543e4f')
    // },{
    //    $set:{
    //        completed: true
    //    } 
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b94ef98b83e12341492ef5c')
    },{
       $set:{
           name: 'Hazem'
       },
       $inc:{
           age: 1
       }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    //client.close();
});
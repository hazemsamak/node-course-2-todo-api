//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err, results) => {
    //  if(err){
    //      return console.log('Unable to insert todo', err);
    //  }
    //  console.log(JSON.stringify(results.ops, undefined, 2));    
    // })

    // db.collection('Users').insertOne({
    //     name: 'Hazem',
    //     age: 38,
    //     location: 'Dubai'
    // },(err, results) => {
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(results.ops);
    //     console.log(results.ops[0]._id.getTimestamp());
    // });

    client.close();
});
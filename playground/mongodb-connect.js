const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bb12d547f719808bd7a9fc2')
    }, {
        $set: {
            name: 'Signe',
            location: 'Los Angeles'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });


    // db.close();
});

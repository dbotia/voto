const mongoose = require('mongoose');
const keys = require('./keys');

//Promesas globales de mongo
mongoose.Promise = global.Promise;
// Conectamos con MongoDB
//7mongoose.connect(keys.mongoURI)
//.then(() => console.log('MongoDB Conectado'))
//.catch(err => console.log(err));

try {
    mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log("connected"));    
    }catch (error) { 
    console.log("could not connect");    
    }
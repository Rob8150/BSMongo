var mongoose = require( 'mongoose' );
// Build the connection string
//testdb is database name
var dbURI = 'mongodb://localhost:27017/testdb';
// Create the database connection
mongoose.connect(dbURI);
// Define connection events
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
     console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
console.log('Mongoose disconnected');
});
process.on('SIGINT', function() {
     mongoose.connection.close(function () {
     console.log('Mongoose disconnected through app termination');
     process.exit(0);
});
});
//******************************
//USER SCHEMA
//******************************
var mongoSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstname: String,
    lastname: String,
    admin: String
});
//collection name peoples
var mongo = mongoose.model('people', mongoSchema);
//--
//Drop Collection
//mongoose.connection.collections['people'].drop( function(err) {
//    console.log('collection dropped');
//});
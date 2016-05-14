/*// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var roomSchema = new Schema({
  price: { type : Number, default : 0, },
  capbility: { type : Number, default : 0 },
  description: { type: String, default: '', trim: true},
  area: {type: Number, default: 0 },
  rooms: [{
    status: {type:String, default: ''}
  }]
});


// the schema is useless so far
// we need to create a model using it
var Room = mongoose.model('Room', roomSchema);


// make this available to our messages in our Node applications
module.exports = Room;*/
/*// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var roomOrderSchema = new Schema({
  agent: {type: Schema.ObjectId, ref : 'User' },
  customer: {type: Schema.ObjectId, ref : 'User' },
  orderDate: { type : Date, default : Date.now },
  details: [{
  	room: {type: Schema.ObjectId, ref : 'Room' },
  	dateArrive: { type : Date, default : Date.now },
  	dateLeave: { type : Date, default : Date.now },
  	quantity: {type: Number, default: 1}
  }]
});


// the schema is useless so far
// we need to create a model using it
var RoomOrder = mongoose.model('RoomOrder', roomOrderSchema);


// make this available to our messages in our Node applications
module.exports = RoomOrder;*/
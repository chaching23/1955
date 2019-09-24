const mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
  name:  { type: String },
  age:  { type: String }, 
  stack_level: { type: String }, 
}); 


mongoose.model('User', UserSchema); 
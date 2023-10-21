const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false,
    // unique: true,
  },
  role: String,
  type: String,
  teamLeaderName: String,  
  member1: String,
  member2: String,
  member3: String,
  member4: String,
  name: String,
  gender:String,
  email: {
    type: String,
    required:false,
    //unique: true,
  },
  mobileNo: String,
  password: String,
  pdf:{
    data:Buffer,
    contentType: String, 
    }, 
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
  },
 
});

const UserModel = mongoose.model('users', userSchema);  
module.exports = UserModel

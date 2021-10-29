const mongoose=require('mongoose');
const validator =require('validator');

const userSchema=new mongoose.Schema({
name:{
    type:String,
    required:[true,'Please provide your name'],
    trim:true
},
email:{
    type:String,
    required:[true,'Please provide your email'],
    trim:true,
    unique:true,
    validate:[validator.isEmail,'Please provide a valid email']
},
contact:{
    type:String,
    required:true,
    unique:true,
    minlength:10,
    maxlength:10,

},
address:{
    type:String,
    required:true,

},
password:{
    required:true,
    type:String,
    minlength:6,
    maxlength:8,
    },
configPassword:{
    required:true,
    type:String,
    minlength:6,
    maxlength:8,
    validate:{validator: function (el){
        return el === this.password;
      }},
},
role:{type: String,
    enum: ['user', 'admin'],
    default: 'user'},

profilePic:String,

watchList:[],
favourites:[],

});

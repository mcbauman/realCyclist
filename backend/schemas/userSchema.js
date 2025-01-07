const mongoose = require("mongoose")

const userSchema=new mongoose.Schema({
    name:{type:String, required:true, unique:true },
    password:{type:String, required:true,},
    role:{type:String, enum:["admin","user"],required:true},
    colorSchema:{type:String, enum:["default"]}
},
{
    toObject: {
        transform: function (doc, ret) {
            delete ret.password
            delete ret.__v
        }
      },
    toJSON:{
        transform: function(doc,ret,options){
            delete ret.password
            delete ret.__v
        }
    }
}
)

module.exports = mongoose.model("Users", userSchema)
// const UserSchema=mongoose.model("Users",userSchema)

// module.exports = UserSchema;
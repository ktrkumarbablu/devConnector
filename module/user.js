const mongoose=require("mongoose");
const schema=mongoose.schema;
const userSchema=new schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    avatar:{type:String},
    date:{
        type:date,
        default:date.now
    }
});
module.exports=user=mongoose.model('user',userSchema);
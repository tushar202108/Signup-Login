const mongoose = require ('mongoose')
const Learnschema = new mongoose.Schema({
    name:String,
    email: String,
    password:String
});


module.exports= mongoose.model('users',Learnschema);
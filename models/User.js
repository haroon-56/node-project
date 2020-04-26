const mongoes = require('mongoose');

const UserSchema = new mongoes.Schema({
    username:{
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
    }
});

const Post = module.exports = mongoes.model('Post',UserSchema); 
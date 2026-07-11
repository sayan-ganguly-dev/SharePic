// const mongoose = require('mongoose') ;


// const postSchema = new mongoose.Schema({
//     image : String ,
//     caption : String
// })


// const postModel = mongoose.model('post', postSchema) ;

// module.exports = postModel ;


const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: String,
    caption: String,
    user: String
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;

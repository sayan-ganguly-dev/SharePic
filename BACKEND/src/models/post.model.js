const mongoose = require('mongoose') ;


const postSchema = new mongoose.Schema({
    image : String ,
    caption : String
})


const postModel = mongoose.model('post', postSchema) ;

module.exports = postModel ;

// const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema({
//   image: {
//     type: String,
//     required: true,
//   },

//   caption: {
//     type: String,
//     required: true,
//   },

//   user: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("Post", postSchema);
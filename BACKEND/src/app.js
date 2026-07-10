const express = require('express') ;
const uploadFile = require('./service/storage.service') ;
const multer = require('multer') ;
const postModel = require('./models/post.model');
const cors = require('cors' );
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");



const app = express() ;
app.use(cors()) ;
app.use(express.json()) ;



app.use("/api/auth", authRoutes);

const upload = multer({storage : multer.memoryStorage()});


// POST Method
// app.post('/create-post', upload.single("image"), async (req, res) => {
//     console.log(req.body) ;
//     console.log(req.file) ;

//     const result = await uploadFile(req.file.buffer) ;
//     const post = postModel.create({
//         image : result.url,
//         caption : req.body.caption
//     })

//     return res.status(201).json({
//         sms : "post created successfully" ,
//         post
//     })
//     console.log(result) ;
// })

app.post(
  "/create-post",
  authMiddleware,
  upload.single("image"),
  async (req, res) => {

    console.log(req.user);

    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption,
    });

//     const post = await postModel.create({
//   image: result.url,
//   caption: req.body.caption,
//   user: req.user.name,
// });

    return res.status(201).json({
      sms: "Post created successfully",
      post,
    });
  }
);


// GET (Fetch Method)
app.get('/post', async (req, res) => {
    const posts =  await postModel.find() ;

    return res.status(200).json({
        sms : "post fetch successfully",
        posts
    })
})

module.exports = app ;



// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNTBjYTI5NTgwZGY5ODg4YTUwYTA3MSIsImVtYWlsIjoic2F5YW5AZ21haWwuY29tIiwiaWF0IjoxNzgzNjgwNzMwLCJleHAiOjE3ODQyODU1MzB9.GO6SOJmbKiKcVchS3YsGtYpY7yWz4o-u7DRweT-E3ww"

















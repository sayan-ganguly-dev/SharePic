// const express = require('express') ;
// const uploadFile = require('./service/storage.service') ;
// const multer = require('multer') ;
// const postModel = require('./models/post.model');
// const cors = require('cors' );
// const authRoutes = require("./routes/authRoutes");
// const authMiddleware = require("./middleware/authMiddleware");



// const app = express() ;
// app.use(cors()) ;
// app.use(express.json()) ;



// app.use("/api/auth", authRoutes);

// const upload = multer({storage : multer.memoryStorage()});



// app.post(
//   "/create-post",
//   authMiddleware,
//   upload.single("image"),
//   async (req, res) => {

//     console.log(req.user);

//     console.log(req.body);
//     console.log(req.file);

//     const result = await uploadFile(req.file.buffer);

//     const post = await postModel.create({
//       image: result.url,
//       caption: req.body.caption,
//     });



//     return res.status(201).json({
//       sms: "Post created successfully",
//       post,
//     });
//   }
// );


// // GET (Fetch Method)
// app.get('/post', async (req, res) => {
//     const posts =  await postModel.find() ;

//     return res.status(200).json({
//         sms : "post fetch successfully",
//         posts
//     })
// })

// module.exports = app ;





const express = require("express");
const uploadFile = require("./service/storage.service");
const multer = require("multer");
const postModel = require("./models/post.model");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const upload = multer({
  storage: multer.memoryStorage(),
});

// ================= CREATE POST =================

app.post(
  "/create-post",
  authMiddleware,
  upload.single("image"),
  async (req, res) => {
    try {
      console.log(req.user);
      console.log(req.body);
      console.log(req.file);

      const result = await uploadFile(req.file.buffer);

      const post = await postModel.create({
        image: result.url,
        caption: req.body.caption,
        user: req.user.name, 
      });

      return res.status(201).json({
        sms: "Post created successfully",
        post,
      });
    } catch (err) {
      console.log(err);

      return res.status(500).json({
        sms: "Something went wrong",
        error: err.message,
      });
    }
  }
);

// ================= GET POSTS =================

app.get("/post", async (req, res) => {
  try {
    const posts = await postModel.find();

    return res.status(200).json({
      sms: "Post fetched successfully",
      posts,
    });
  } catch (err) {
    return res.status(500).json({
      sms: "Something went wrong",
      error: err.message,
    });
  }
});

module.exports = app;




















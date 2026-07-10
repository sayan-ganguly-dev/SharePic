require("dotenv").config() ;
const app = require('./src/app') ;
//require("dotenv").config() ;
// const mongoose = require('mongoose') ;

const connectDb = require('./src/database/db') ;
connectDb() ;









app.listen(3000,  () => {
    console.log("server is running on 3000 number port") ;

})
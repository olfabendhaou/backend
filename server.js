const express = require('express');


// 2 create instance of express

const app = express();

//  3 require dotenv


app.use(express.json());

require("dotenv").config()

// 4  create port







// 6  connect  DB

const connectDB = require('./config/connectDB');

connectDB();

app.use("/api/contact",require("./routes/contact"));

app.use("/api/user",require("./routes/user"));

app.use((req , res)=> {
    res.send('api is running')
} )


const PORT= process.env.PORT || 3043;

//  7 create routes







// 5 create server
app.listen(PORT,error =>{ 
    error? console.error(`failed to connect ${error}`) : console.log(`Connecting to port ${PORT}`) 
})
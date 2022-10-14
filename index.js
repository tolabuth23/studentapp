const express = require("express")
const app = express();
const dotenv = require('dotenv');
const  mongoose = require("mongoose");
const studentRouter = require('./routes/students')
dotenv.config();
const PORT = process.env.PORT|5000
mongoose.connect(process.env.MONGO_DB)
    .then(()=>console.log("Mongo DB is connection successfully!!"))
    .catch((err)=>{
        console.log(err);
    });
//all api route user herer
app.use(express.json());
app.use("/api/student", studentRouter);

app.listen(PORT, ()=>{
    console.log("Server running on port "+PORT)
});
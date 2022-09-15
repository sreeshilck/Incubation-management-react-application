const express =  require('express')
const cors = require ('cors')
const mongoose = require ("mongoose")
const Routes = require('./Routes/Route')
const cookieParser = require("cookie-parser")
const app = express();
require("dotenv").config();



app.listen(5000, () => {
    console.log("server is running on port 5000");
});

mongoose.connect("mongodb://localhost:27017/incubationapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connection Successful");
}).catch((err) => {
    console.log(err.message,"DB Connection Failed");
})

app.use(
    cors({
        origin: ["http://localhost:3001"],
        method: ["GET", "POST"],
        credentials : true,
    })
); 


app.use(cookieParser());
app.use(express.json());
app.use("/", Routes)
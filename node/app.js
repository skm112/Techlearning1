var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var countryRoute = require("./server/api/country.api.js");
var productRoute = require("./server/api/product.api");
var imageRoute = require("./server/api/image.api")
var imageUploadRoute = require("./server/api/imageUpload.api")
var authUserRoute = require("./server/api/user.api")
var path = require("path");
app.use(express.static(path.join(__dirname, 'uploads')))
// access controls----------------------------------------------
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    );
    // res.header('Access-Control-Allow-Headers', 'Content-Type','Authorization');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );

    next();
});

//connectDB-----------------------------------
const db = require("./setups/myurl").mongoURL1

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected successfully..."))
    .catch(err => console.log(err));

//bparser-----------------------------
app.use(bodyparser.json({ limit: '20mb', extended: true }));
app.use(bodyparser.urlencoded({ limit: '20mb', extended: true }));

app.use('/country', countryRoute);
app.use('/product', productRoute)
app.use('/image', imageRoute)
app.use('/imageupload', imageUploadRoute)
app.use('/auth/user', authUserRoute)

app.listen(3000);
console.log("Server is running at PORT:3000");
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var db = require("../models/Image");

//@getData
//@route  /image/list
//@get
router.get("/list", (req, res) => {
    db.find({}, (err, docs) => {
        if (err) throw err;
        res.end(JSON.stringify(docs));
    });
});

//@saveData
//@route  /image/save
//@post
router.post("/save", (req, res) => {
    console.log(req.body.avtar.blobdata);

    var data = {
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        avtar: req.body.avtar,
        st_date: new Date()
    };
    var newRecord = new db(data);
    newRecord.save((err, docs) => {
        if (err) throw err;
        res.send({ msg: "success" });
    });
});


module.exports = router;

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var db = require("../models/ImageUpload");

//@saveData
//@route  /imageupload/save
//@post
router.post("/save", (req, res) => {
    console.log(req.body.docs);

    var data = {
        _id: mongoose.Types.ObjectId(),
        docs: [
            { name: req.body.docs[0].type, avtar: req.body.docs[0].avtar },
            { name: req.body.docs[1].type, avtar: req.body.docs[1].avtar },
            { name: req.body.docs[2].type, avtar: req.body.docs[2].avtar }
        ],
        st_date: new Date()
    };
    var newRecord = new db(data);
    newRecord.save((err, docs) => {
        if (err) throw err;
        res.send({ msg: "success" });
    });
});

//@getData
//@route  /imageupload/list
//@get
router.get("/list", (req, res) => {
    db.find({}, (err, docs) => {
        if (err) throw err;
        res.end(JSON.stringify(docs));
    });
});


//@deleteData
//@route  /imageupload/delete
//@delete
router.delete("/delete/:id", (req, res) => {
    db.findByIdAndRemove(
        mongoose.Types.ObjectId(req.params.id),
        (err, doc) => {
            if (err) res.send(err);
            res.end(JSON.stringify(doc));
        }
    );
});

module.exports = router;

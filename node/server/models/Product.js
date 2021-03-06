var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// var product = new Schema({
//     _id: Schema.Types.ObjectId,
//     name: String,
//     pic:String,
//     price:Number,
//     st_date: Date,
// },
//     { versionKey: false });

var product = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    avtar: {
        filename: String,
        filetype: String,
        blobdata: String
    },
    price: Number,
    st_date: Date,
},
    { versionKey: false });

module.exports = mongoose.model('product', product);
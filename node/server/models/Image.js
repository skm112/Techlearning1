var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var image = new Schema({
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

module.exports = mongoose.model('image', image);
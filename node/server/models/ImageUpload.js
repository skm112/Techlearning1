var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var imageupload = new Schema({
    _id: Schema.Types.ObjectId,
    docs: [
        
    ],
    st_date: Date,
},
    { versionKey: false });

module.exports = mongoose.model('imageupload', imageupload);
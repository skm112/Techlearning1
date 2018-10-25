// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const bcrypt = require("bcryptjs");

// var dbSchema = new Schema({
//     created: { type: Date },
//     updated: { type: Date },
//     username: { type: String, unique: true },
//     password: { type: String, select: false },
//     fullname: { type: String },
//     email: { type: String }
// });
// dbSchema.pre('save', (next) => {
//     now = new Date();
//     this.update = now;
//     if (!this.created) {
//         this.created = now;
//     }
//     var user = this
//     if (!user.isModified('password')) {
//         return next();
//     }
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(user.password, salt, (err1, hash) => {
//             user.password = hash;
//             next();
//         })
//     })
// });
// dbSchema.method.comparePassword = function (password, done) {
//     bcrypt.compare(password, this.password, (err, isMatch) => {
//         done(err, isMatch);
//     });
// };

// module.exports = mongoose.model('user', dbSchema);


var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
//Generated Password lenth max 72bytes/60 characters

var Schema = mongoose.Schema;
//var Schema = new mongoose.Schema({ key: keyType, }, { timestamps: true });
var dbSchema = new Schema({
    created: { type: Date },
    updated: { type: Date },
    username: { type: String, unique: true },
    password: { type: String, select: false },
    fullname: { type: String },
    email: { type: String },
},
    { versionKey: false });

dbSchema.pre('save', function (next) {
    now = new Date();
    this.update = now;
    if (!this.created) {
        this.created = now;
    }
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err1, hash) {
            user.password = hash;
            next();
        });
    });
});

dbSchema.methods.comparePassword = function (password, done) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        done(err, isMatch);
    });
};

var schemaObject = mongoose.model('user', dbSchema);
module.exports = schemaObject;
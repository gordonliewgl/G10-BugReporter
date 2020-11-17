const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['Developer', 'Triager', 'Bug Reporter', 'Reviewer']
    }
});

// Passport.js handles username registration and password hashing
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
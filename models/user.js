const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Recipe = require('./recipes');

const UserSchema = new Schema ({
    username: {
        type: String,
        required: true,
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Username should be at least 6 characters long."
        ]
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    categories: [
        {
            type: String
        }
    ],
    recipes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Recipe"
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('remove', function(next) {
    Recipe.remove({user: this._id}).exec();
    next();
})

const User = mongoose.model("User", UserSchema);

module.exports = User;


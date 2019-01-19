const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    category: {
        type: String
    },
    recipe: {
        type: String,
        require: true,
    },
    user: {
        require: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    item_name: {
        type: String,
        required: true,
    },
    item_discription: {
        type: String,
        required: true,
    },
    item_quantity: {
        type: String,
        required: true,
    },
});

const recipeSchema = new mongoose.Schema({
    // _id: { type: String },
    recipe_name: {
        type: String,
        required: true,
    },
    calorie: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    items: [itemSchema],
});

module.exports = mongoose.model("Recipe", recipeSchema);
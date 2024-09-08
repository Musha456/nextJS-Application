const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    company : String,
    color : String,
    category : String
});

export const Product = mongoose.models.products || mongoose.model("products", productSchema);
import * as mongoose from "mongoose";

var productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number
});

export default mongoose.model("products", productSchema);

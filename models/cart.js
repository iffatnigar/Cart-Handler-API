import mongoose from "mongoose";
const { Schema } = mongoose;

// Define Cart Schema
const cartSchema = new Schema({
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
  details: {
    brand: { type: String },
    model: { type: String },
    warranty: { type: String },
  },
  addedAt: { type: Date, default: Date.now },
});

// Create Cart Model
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;

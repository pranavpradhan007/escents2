const moongoose = require("mongoose");

const userSchema = new moongoose.Schema({
  id: Number,
  productName: String,
  productImage1: String,
  productImage2: String,
  productImage3: String,
  intensity: String,
  description: String,
  accordsImage: String,
  notesImage: String,
});

const product = moongoose.model("Product", userSchema);
module.exports = product;
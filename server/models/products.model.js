const mongoose = require('mongoose');
const {Schema} = mongoose;

//MODELO DEL PRODUCTO
const ProductSchema = new Schema({
    title: {type: String, require: true, unique:true},
    description: {type: String, require: true},
    length: {type: String, require: true },
    inversions: {type: String, require: true},
    imageUrl: {type: String, require: true },
});

const Products = mongoose.model('Product', ProductSchema);
module.exports = Products;
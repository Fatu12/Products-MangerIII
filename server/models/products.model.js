const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    title:{
        type : String,
        required : [true, 'Title is required '],
        minLength: [2, 'Title must me at least 2 characters'],
        // maxLength:  [40, 'Title not be more than 40 character ']
    },
    price: {
        type: Number,
        required : [true, 'Price is required '],
        minLength: [2, 'Price  must me at least 2 characters'],
    },
    description:{
        type: String,
        required : [true, 'Description is required '],
        minLength: [2, 'Description  must me at least 2 characters'],
        },

    },
    {timestamps: true}

)
// 'Product' need to match up with our collection, because if if have different name their it going to create 
// different collection in the same schema, it doesn't make a problem but the data is no going in the same collection 

module.exports = mongoose.model("Product", ProductSchema)
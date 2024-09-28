import mongoose from "mongoose";
// 1- Create Schema 
const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Category required'],
            unique: [true, 'Category must be unqiue'],
            minlength: [3, 'Too short category name'],
            maxlength: [32, 'Too long category name']
        },
        // A and B ==> shopping.com/a-and-b 
        slug:{
            type: String,
            lowercase: true,
        },
        image: String,
    },
    {timestamps: true}
);

// 2- Create Model
const categoryModel = mongoose.model('category', categorySchema);

export default categoryModel;
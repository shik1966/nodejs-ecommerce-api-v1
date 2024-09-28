// Business
import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";
import expressAsyncHandler from "express-async-handler";

// export const getCategories = (req,res)=> {
//     const name = req.body.name;
//     console.log(req.body);

//     const newCategory = new categoryModel({ name });
//     newCategory
//     .save().
//     then((doc) =>{
//         res.json(doc);
//     })
//     .catch((err)=>{ 
//         res.json(err);
//     })
// };

// export const getCategories = async (req, res) => {
//     try {
//         const name = req.body.name;
//         console.log(req.body); 

//         // Creating a new category
//         const newCategory = new categoryModel({ name });

//         // Save the category using await
//         //const savedCategory = await newCategory.save();
//         await newCategory.save();

//         // Send the saved document back as a JSON response
//         res.status(200).json(newCategory);

//     } catch (err) {
//         // Send the error back as a JSON response if something goes wrong
//         res.status(500).json({ message: "Error saving category", error: err });
//     }
// };

// export const createCategory = (req,res) =>{ 
//         const name = req.body.name;
//         // then and catch
//         categoryModel.create({name, slug: slugify(name)})
//         .then((category) => 
//             res.status(201).json({data: category})
//         ).catch((err) =>
//             res.status(400).send(err));
// };

// export const createCategory = async(req,res) =>{
//     const name = req.body.name;
//     // asynce await
//     try{
//         const category = await categoryModel.create({name, slug: slugify(name)});
//         res.status(201).json({data: category});
//     } catch(err){
//         res.status(400).send(err);
//     }
// }

// @desc      Get list of categories
// @route     GET /api/v1/categories
// @access    Public  
export const getCategories = expressAsyncHandler(async (req, res) => {
    const page = 1; 
    const limit = 5;
    const skip = (page - 1) * limit;  // (2 -1) * 5 = 5
    const categories = await categoryModel.find({}).skip(skip).limit(limit);
    res.status(200).json({results: categories.length, page, data: categories})
});

// @desc      Create category   
// @route     POST /api/v1/categories
// @access    Private 
export const createCategory = expressAsyncHandler( async(req,res) =>{
    const name = req.body.name;
    const category = await categoryModel.create({name, slug: slugify(name)});
    res.status(201).json({data: category});
}); 
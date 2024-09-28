import express from "express"; 
import { getCategories, getCategory, createCategory, updateCategory, deleteCategory } from "../services/categoryService.js";

const router = express.Router();

// router.get('/', getCategories);
// router.post('/', createCategory);

router.route('/').get(getCategories).post(createCategory);
router
    .route('/:id')
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory);

export default router;
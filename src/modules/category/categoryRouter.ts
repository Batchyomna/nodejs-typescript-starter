
// Router for the url /categories
import { Router } from 'express'
import { createCategoryController } from './useCases/createCategory/'
import {getCategoriesController} from './useCases/getCategories'
import { getCategoryByIdController} from './useCases/getCategoryById'
import {editCategoryByIdController} from './useCases/editCategoryById'
import { deleteCategoryByIdController } from './useCases/deleteCategory'

const categoryRouter: Router = Router();

///api/v1/categories
categoryRouter.post('/create-category', (req, res) => createCategoryController.execute(req, res))
categoryRouter.get('/all-categories', (req, res) => getCategoriesController.execute(req, res))
categoryRouter.get('/one-category', (req, res) => getCategoryByIdController.execute(req, res))
categoryRouter.put('/edit-category', (req, res) => editCategoryByIdController.execute(req, res))
categoryRouter.delete('/delete-category', (req, res) => deleteCategoryByIdController.execute(req, res))


export { categoryRouter }
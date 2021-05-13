import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { CategoryRepo } from '../../categoryRepo'
import {EditCategoryById } from './editCategoryById'
import {EditCategoryByIdController } from './editCategoryByIdController'


//Je construit mon repo avec les entités dont j'ai besoin
const categoryRepo = new CategoryRepo(entitiesObject)
const editCategoryById = new EditCategoryById(categoryRepo)
const editCategoryByIdController = new EditCategoryByIdController(editCategoryById)

export { editCategoryById, editCategoryByIdController }
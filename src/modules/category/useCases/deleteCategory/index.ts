import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { CategoryRepo } from '../../categoryRepo'
import {DeleteCategoryById } from './deleteCategoryById'
import {DeleteCategoryByIdController } from './deleteCategoryByIdController'


//Je construit mon repo avec les entités dont j'ai besoin
const categoryRepo = new CategoryRepo(entitiesObject)
const deleteCategoryById = new DeleteCategoryById(categoryRepo)
const deleteCategoryByIdController = new DeleteCategoryByIdController(deleteCategoryById)

export { deleteCategoryById, deleteCategoryByIdController }
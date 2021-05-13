import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { CategoryRepo } from '../../categoryRepo'
import {GetCategories } from './getCategories'
import {GetCategoriesController } from './getCategoriesController'


//Je construit mon repo avec les entités dont j'ai besoin
const categoryRepo = new CategoryRepo(entitiesObject)
const getCategories = new GetCategories(categoryRepo)
const getCategoriesController = new GetCategoriesController(getCategories)

export { getCategories, getCategoriesController }
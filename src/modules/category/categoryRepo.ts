import {categoryProps} from './categoryTypes' 

export class CategoryRepo {
    private entities: any

    constructor(entities: any) {
        //Category //User //Skill
        this.entities = entities
    }

    // public async getCategories() {
    //     const CategoryEntity = this.entities.Category
    //     return await CategoryEntity.create({name:"Concevoir et Développer des composants d’interface utilisateur"}).save();
    // }
    public async create(categoryProps: categoryProps){
        const CategoryEntity = this.entities.Category
        return await CategoryEntity.create({name: categoryProps.name, description: categoryProps.description}).save()
    }
    public async findCategories(){
        const CategoryEntity = this.entities.Category
        return await CategoryEntity.find()
    }
    public async findCategoryById(id :number){
        const CategoryEntity = this.entities.Category
        return await CategoryEntity.findOne(id)
    }
    public async editCategoryByIdRepo({ id, name, description }: categoryProps){
        const CategoryEntity = this.entities.Category
        const categoryToEdit =  await CategoryEntity.findOne(id)
        if(name){
            categoryToEdit.name = name
        }
        if(description){
            categoryToEdit.description = description
        }
        return await CategoryEntity.save(categoryToEdit)

    }
    public async deleteCategoryByIdRepo(id :number){
        const CategoryEntity = this.entities.Category
        let categoryToDelete= await CategoryEntity.findOne(id)
        return await CategoryEntity.remove(categoryToDelete)
    }
    

}

  
//UseCase -> Service -> de la logique
import { CategoryRepo } from "../../categoryRepo";

export class DeleteCategoryById {
    private categoryRepo: CategoryRepo;

    constructor(categoryRepo: CategoryRepo) {
        this.categoryRepo = categoryRepo
    }

    public async deleteCategoryByIdService(id: number) {
        return await this.categoryRepo.deleteCategoryByIdRepo(id);
    }
}
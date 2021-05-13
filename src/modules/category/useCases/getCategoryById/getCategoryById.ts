  
//UseCase -> Service -> de la logique
import { CategoryRepo } from "../../categoryRepo";

export class GetCategoryById {
    private categoryRepo: CategoryRepo;

    constructor(categoryRepo: CategoryRepo) {
        this.categoryRepo = categoryRepo
    }

    public async findCategoryIdService(id:number) {
        return await this.categoryRepo.findCategoryById(id);
    }
}
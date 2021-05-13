  
//UseCase -> Service -> de la logique
import { CategoryRepo } from "../../categoryRepo";
import { categoryProps} from '../../categoryTypes'

export class EditCategoryById {
    private categoryRepo: CategoryRepo;

    constructor(categoryRepo: CategoryRepo) {
        this.categoryRepo = categoryRepo
    }

    public async editCategoryIdService({ id, name, description }: categoryProps) {
        return await this.categoryRepo.editCategoryByIdRepo({ id, name, description });
    }
}
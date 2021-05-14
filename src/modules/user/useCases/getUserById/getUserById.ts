  
//UseCase -> Service -> de la logique
import { UserRepo } from "../../userRepo";

export class GetUserById {
    private userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo
    }

    public async findUserIdService(id:number) {
        return await this.userRepo.findUserById(id);
    }
}
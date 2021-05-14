  
//UseCase -> Service -> de la logique
import { UserRepo } from "../../userRepo";

export class DeleteUserById {
    private userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo
    }

    public async deleteUserByIdService(id: number) {
        return await this.userRepo.deleteUserByIdRepo(id);
    }
}
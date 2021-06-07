  
//UseCase -> Service -> de la logique
import { UserRepo } from "../../studentRepo";

export class GetUsers {
    private userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo
    }

    public async execute() {
        return await this.userRepo.findUsers();
    }
}
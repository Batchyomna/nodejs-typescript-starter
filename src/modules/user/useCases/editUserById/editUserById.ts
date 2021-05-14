  
//UseCase -> Service -> de la logique
import { UserRepo } from "../../userRepo";
import { userProps} from '../../userTypes'

export class EditUserById {
    private userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo
    }

    public async editUserIdService( id: number,{ firstName, lastName }: userProps) {
        return await this.userRepo.editUserByIdRepo(id, { firstName, lastName });
    }
}
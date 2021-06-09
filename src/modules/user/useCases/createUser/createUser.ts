  
//UseCase -> Service -> de la logique
import { UserRepo } from "../../userRepo";
import { userProps } from '../../userTypes'
import argon2 from 'argon2'
export class CreateUser {
    private userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo
    }

    public async execute(props: userProps) {
        try{
            const userExists = await this.userRepo.isUserExist(props.email)
            if(userExists){
                return {
                    success: false,
                    message: 'User already exists'
                }
            }
            const passWordHash = await argon2.hash(props.password)
             props.password = passWordHash
            await this.userRepo.create(props);
            return{
                success: true,
                message: 'User is correctly created'
            }

        }catch(err){
            return {
                success: false,
                message: err
            }
        }
    }
}
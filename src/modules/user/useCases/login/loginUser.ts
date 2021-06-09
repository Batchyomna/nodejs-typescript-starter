
//UseCase -> Service -> de la logique
import { UserRepo } from "../../userRepo";
import { userLoginProps } from '../../userLoginTypes'
import argon2 from 'argon2'



export class LoginUser {
    private userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo
    }

    public async loginUserService(props: userLoginProps) {
        try {
            const userExists = await this.userRepo.isUserExist(props.email)
            if (userExists) {
                const user = await this.userRepo.getUserByEmail(props.email)
                console.log(user)
                const goodPasword = await argon2.verify(user.password, props.password)
                if (goodPasword) {
                    return {
                        success: true,
                        message: "You are autherized",
                        token: await this.userRepo.createToken(user.id)
                    }
                } else {
                    return {
                        success: false,
                        message: " You can't acces with this password"
                    }
                }
            } else {
                return {
                    success: false,
                    message: "This email is unconnu you should sign up first"
                }
            }
        } catch (err) {
            return {
                success: false,
                message: err
            }
        }
    }
}
import {userProps} from './userTypes' 

export class UserRepo {
    private entities: any

    constructor(entities: any) {
        //User
        this.entities = entities
    }
    public async create(userProps:userProps){
        const UserEntity = this.entities.User
        return await UserEntity.create({email: userProps.email, password: userProps.password,  isAdmin: userProps.isAdmin,  lastLoggin: userProps.lastLoggin }).save()
    }
    public async findUsers(){
        const UserEntity = this.entities.User
        return await UserEntity.find()
    }
    public async findUserById(id :number){
        const UserEntity = this.entities.User
        return await UserEntity.findOne(id)
    }
    public async editUserByIdRepo(id:number, {email, password }: userProps){
        const UserEntity = this.entities.User
        const userToEdit =  await UserEntity.findOne(id)
        if(email){
            userToEdit.email = email
        }
        if(password){
            userToEdit.password = password
        }
        return await UserEntity.save(userToEdit)

    }
    public async deleteUserByIdRepo(id :number){
        const UserEntity = this.entities.User
        let userToDelete= await UserEntity.findOne(id)
        return await UserEntity.remove(userToDelete)
    }
}

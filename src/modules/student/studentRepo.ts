import {studentProps} from './studentTypes' 

export class StudentRepo {
    private entities: any

    constructor(entities: any) {
        //Student
        this.entities = entities
    }
    public async create(studentProps:studentProps){
        const UserEntity = this.entities.User
        return await UserEntity.create({firstName: studentProps.firstName, lastName: studentProps.lastName}).save()
    }
    // public async findUsers(){
    //     const UserEntity = this.entities.User
    //     return await UserEntity.find()
    // }
    // public async findUserById(id :number){
    //     const UserEntity = this.entities.User
    //     return await UserEntity.findOne(id)
    // }
    // public async editUserByIdRepo(id:number, {firstName, lastName }: userProps){
    //     const UserEntity = this.entities.User
    //     const userToEdit =  await UserEntity.findOne(id)
    //     if(firstName){
    //         userToEdit.firstName = firstName
    //     }
    //     if(lastName){
    //         userToEdit.lastName = lastName
    //     }
    //     return await UserEntity.save(userToEdit)

    // }
    // public async deleteUserByIdRepo(id :number){
    //     const UserEntity = this.entities.User
    //     let userToDelete= await UserEntity.findOne(id)
    //     return await UserEntity.remove(userToDelete)
    // }
}

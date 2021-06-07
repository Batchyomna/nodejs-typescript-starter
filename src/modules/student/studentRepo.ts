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
    public async findStudentsRepo(){
        const StudentEntity = this.entities.Student
        return await StudentEntity.find()
    }
    // public async findUserById(id :number){
    //     const UserEntity = this.entities.User
    //     return await UserEntity.findOne(id)
    // }

    //? To ask: how we can edit password for this student
    public async editStudentByIdRepo(id:number, {firstName, lastName }: studentProps){
        const StudentEntity = this.entities.Student
        const studentToEdit =  await StudentEntity.findOne(id)
        if(firstName){
            studentToEdit.firstName = firstName
        }
        if(lastName){
            studentToEdit.lastName = lastName
        }
        return await StudentEntity.save(studentToEdit)

    }
    public async deleteStudentByIdRepo(id :number){
        const StudentEntity = this.entities.Student
        let studentToDelete= await StudentEntity.findOne(id)
        return await StudentEntity.remove(studentToDelete)
    }
}

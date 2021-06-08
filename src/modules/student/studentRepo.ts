import {studentProps} from './studentTypes' 

export class StudentRepo {
    private entities: any

    constructor(entities: any) {
        //Student
        this.entities = entities
    }
    public async create(studentProps:studentProps){
        const StudentEntity = this.entities.Student
        return await StudentEntity.create({firstName: studentProps.firstName, lastName: studentProps.lastName, user: studentProps.user}).save()
    }
    public async findStudentsRepo(){
        const StudentEntity = this.entities.Student
        return await StudentEntity.find()
    }
    public async getStudentByIdRepo(id :number){
        const StudentEntity = this.entities.Student
        return await StudentEntity.findOne(id)
    }

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
    public async testIfUserIdAlreadyUsed(id : number){
        const StudentEntity = this.entities.Student;
        let student = await StudentEntity.findOne({where: {user: id}})
        if(student){
            return true // déjà used
        }else{
          return  false
        }
    }
   
}

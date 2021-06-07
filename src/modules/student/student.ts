//Domain : Student

interface IStudent {
    id: number
    firstName: string
    lastName : string

}

export type StudentProps = {
    id: number
    firstName: string
    lastName: string
}

export class Student implements IStudent {
    public id: number
    public firstName: string
    public lastName : string

    constructor(props: StudentProps) {
        this.id = props.id
        this.firstName = props.firstName
        this.lastName =props.lastName
    }
}
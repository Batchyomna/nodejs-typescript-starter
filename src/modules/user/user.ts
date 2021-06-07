//Domain : User

interface IUser {
    id: number
    email: string
    password : string
    isAdmin: boolean,
    lastLoggin: Date

}

export type UserProps = {
    id: number
    email: string
    password : string
    isAdmin: boolean,
    lastLoggin: Date
}

export class User implements IUser {
    public id: number
    public email: string
    public password : string
    public isAdmin: boolean
    public lastLoggin: Date

    constructor(props: UserProps) {
        this.id = props.id
        this.email = props.email
        this.password =props.password
        this.isAdmin =props.isAdmin
        this.lastLoggin =props.lastLoggin
     
    }
}
import { MinLength, MaxLength, IsString, IsDefined, IsInt } from 'class-validator'
import { AbstractDto } from '../../../../common/abstractDto'

// "firstName": "Sami",
//     "lastName": "Grand",
//      "user": 2

export interface IRequestCreateStudentDto {
    firstName: string;
    lastName: string;
    user: number;
}

export class RequestCreateStudentDto extends AbstractDto implements IRequestCreateStudentDto {
    //-------------FIELD-------------
    @IsString()
    @MinLength(1, {
        message: 'First name is too short',
    })
    @MaxLength(20, {
        message: 'First name is too long',
    })
    @IsDefined({ message: 'First name is required' })
    public firstName: string

    //-------------FIELD-------------
    @IsDefined({ message: 'Last name is required' })
    @IsString()
    @MinLength(1, {
        message: 'Last name is too short',
    })
    @MaxLength(20, {
        message: 'Last name is too long',
    })
    @IsDefined({ message: 'Last name is required' })
    public lastName: string

    //---------FIELD------------------
    @IsDefined({ message: 'User id is required' })
    @IsInt()
    @IsDefined({ message: 'Last name is required' })
    public user: number

    constructor(props: IRequestCreateStudentDto) {
        super();

        // const { firstname, lastname, username, email, password } = props;
        const {firstName, lastName, user } = props;

        // this.firstname = firstname;
        // this.lastname = lastname;
        // this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.user = user;

    }
}
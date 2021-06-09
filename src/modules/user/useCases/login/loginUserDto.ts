import { MinLength, MaxLength, IsString, IsDefined, IsEmail } from 'class-validator'
import { AbstractDto } from '../../../../common/abstractDto'

export interface IRequestLoginUserDto {
    email: string;
    password: string;
}

export class RequestLoginUserDto extends AbstractDto implements IRequestLoginUserDto {
    //-------------FIELD-------------
    @IsEmail()
    @IsDefined({ message: 'Email is required' })
    public email: string

    //-------------FIELD-------------we don't need to indcate somthing to the user
    @IsDefined({ message: 'Password is required' })
    public password: string

    constructor(props: IRequestLoginUserDto) {
        super();
        const { email, password } = props;
        this.email = email;
        this.password = password;
    }
}
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

    //-------------FIELD-------------
    @IsDefined({ message: 'Password is required' })
    @MinLength(3, {
        message: 'Password is too short',
    })
    @MaxLength(15, {
        message: 'Password is too long',
    })
    @IsString({message:"Password should be string"})
    public password: string

    constructor(props: IRequestLoginUserDto) {
        super();
        const { email, password } = props;
        this.email = email;
        this.password = password;
    }
}
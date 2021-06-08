//Controller
import { CreateUser } from './createUser'
import { Request, Response } from 'express'


// DTO
import { validate } from 'class-validator'
import { RequestCreateUserDto } from './createUserDto'
export class CreateUserController {
    private useCase: CreateUser;

    constructor(createUser: CreateUser) {
        this.useCase = createUser;
    }
      
    public async execute(req: Request, res: Response) {
        const {email, password, isAdmin, lastLoggin } = req.body
        if (!email) {
            return res.status(400).json({
                error: {
                    message: 'Your email is required'
                }
            });
        }

        if (!password) {
            return res.status(400).json({
                error: {
                    message: 'Youu have to enter your password'
                }
            });
        }
        const requestUserDto = new RequestCreateUserDto(req.body);
        const errors = await validate(requestUserDto);
        // const dtoErrors = await requestUserDto.isValid(requestUserDto)

        // if (!!dtoErrors) {
        //     return res.status(400).json(dtoErrors);
        // }
        if(errors.length > 0){
            return res.status(400).json(errors[0].constraints)
        }else{
               const user = await this.useCase.execute({email, password, isAdmin, lastLoggin });
       return  res.status(200).json(user);
        }
     
    }
}
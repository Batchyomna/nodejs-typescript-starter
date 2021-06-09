//Controller
import { CreateUser } from './createUser'
import { Request, Response } from 'express'


// DTO
import { validate } from  'class-validator'
import { RequestCreateUserDto } from './createUserDto'
export class CreateUserController {
    private useCase: CreateUser;

    constructor(createUser: CreateUser) {
        this.useCase = createUser;
    }
      
    public async execute(req: Request, res: Response) {
        // const {email, password, isAdmin, lastLoggin } = req.body
     
        const requestUserDto = new RequestCreateUserDto(req.body);
         const errors = await validate(requestUserDto);
         console.log('Request DTO create user errors : ', errors);
        const dtoErrors = await requestUserDto.isValid(requestUserDto)

        if (!!dtoErrors) {
            return res.status(400).json(dtoErrors);
        }

        try {
            const result = await this.useCase.execute(req.body);

            if (!result.success) {
                return res.status(400).json(result.message)
            }
            return res.status(201).json(result.message);
        }
        catch (err) {
            console.log('create controllers errors :', err);
            return err
        }
    }

}
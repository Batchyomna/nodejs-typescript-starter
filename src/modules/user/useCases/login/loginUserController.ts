//Controller
import { LoginUser } from './loginUser'
import { Request, Response } from 'express'
import { RequestLoginUserDto } from './loginUserDto'



// DTO
import { validate } from 'class-validator'
export class LoginUserController {
    private useCase: LoginUser;

    constructor(loginUser: LoginUser) {
        this.useCase = loginUser;
    }
      
    public async execute(req: Request, res: Response) {
        const {email, password } = req.body
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
        const requestLoginUserDto = new RequestLoginUserDto(req.body);
        const errors = await validate(requestLoginUserDto);
        if(errors.length > 0){
            return res.status(400).json(errors[0].constraints)
        }else{
            const result = await this.useCase.loginUserService(req.body);
            if(result.success){
                // res.cookie('the Token', result.token)
                return  res.cookie('the Token', result.token, {maxAge: 900000, httpOnly:true}).status(200).json({token : result.token, message: result.message}); 

            }else{
                return res.status(400).json({message: result.message} )

            }
        }
     
    }
}
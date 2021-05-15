import {CreateLevel } from './createLevel'
import { Request, Response } from 'express'
//Controller qui appelle la service 

export class CreateLevelController {
    private useCase: CreateLevel;

    constructor(createLevel: CreateLevel) {
        this.useCase = createLevel;
    }
      
    public async execute(req: Request, res: Response) {

        const {number, name } = req.body
        if (number && name ) {
            const level = await this.useCase.createLevelService({number, name});
            return  res.status(200).json(level);
        }else{
            return res.status(400).json({
                error: {
                    message: 'Id is required'
                }
            });
        }
        
    }
}
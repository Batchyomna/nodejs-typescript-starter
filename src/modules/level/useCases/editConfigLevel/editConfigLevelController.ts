import {EditConfigLevel } from './editConfigLevel'
import { Request, Response } from 'express'
//Controller qui appelle la service 

export class EditConfigLevelController {
    private useCase: EditConfigLevel;

    constructor(editConfigLevel: EditConfigLevel) {
        this.useCase = editConfigLevel;
    }
      
    public async execute(req: Request, res: Response) {

        const { id, number, name } = req.body
        if (!id) {
            return res.status(400).json({
                error: {
                    message: 'Id is required'
                }
            });
        }
        const level = await this.useCase.editConfigLevelService(id, {number, name});
       return  res.status(200).json(level);
    }
}
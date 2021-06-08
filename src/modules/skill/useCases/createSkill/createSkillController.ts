import { CreateSkill } from './createSkill'
import { Request, Response } from 'express'
//Controller

export class CreateSkillController {
    private useCase: CreateSkill;

    constructor(createSkill: CreateSkill) {
        this.useCase = createSkill;
    }
      
    public async execute(req: Request, res: Response) {
        const { name, description, category } = req.body
        if (!name) {
            return res.status(400).json({
                error: {
                    message: 'Name is required'
                }
            });
        }

        if (!description) {
            return res.status(400).json({
                error: {
                    message: 'Description is required'
                }
            });
        }

        const skills = await this.useCase.execute({ name, description, category });
       return  res.status(200).json(skills);
    }
}
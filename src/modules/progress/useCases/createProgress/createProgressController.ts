import {CreateProgress } from './createProgress'
import { Request, Response } from 'express'
//Controller qui appelle la service 

export class CreateProgressController {
    private useCase: CreateProgress;

    constructor(createProgress: CreateProgress) {
        this.useCase = createProgress;
    }
      
    public async execute(req: Request, res: Response) {
        
        const { userId, skillId, levelId} = req.body
        const createProgress = await this.useCase.createProgressService(userId, skillId, levelId)
        return res.status(200).json(createProgress)
    }
}
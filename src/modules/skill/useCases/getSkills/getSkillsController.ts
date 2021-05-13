import { GetSkills } from './getSkills'
import { Request, Response } from 'express'
//Controller

export class GetSkillsController {
    private useCase: GetSkills;

    constructor(getskills:  GetSkills) {
        this.useCase = getskills;
    }

    public async execute(_: Request, res: Response) {
        const skills = await this.useCase.execute();

        return res.status(200).json(skills);
    }
}
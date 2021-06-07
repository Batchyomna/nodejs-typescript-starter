import { GetStudents } from './getStudents'
import { Request, Response } from 'express'
//Controller

export class GetStudentsController {
    private useCase: GetStudents;

    constructor(getStudents:  GetStudents) {
        this.useCase = getStudents;
    }

    public async execute(_: Request, res: Response) {
        const students = await this.useCase.execute();

        return res.status(200).json(students);
    }
}
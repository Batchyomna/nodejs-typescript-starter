import { GetUsers } from './getUsers'
import { Request, Response } from 'express'
//Controller

export class GetUsersController {
    private useCase: GetUsers;

    constructor(getUsers:  GetUsers) {
        this.useCase = getUsers;
    }

    public async execute(_: Request, res: Response) {
        const users = await this.useCase.execute();

        return res.status(200).json(users);
    }
}
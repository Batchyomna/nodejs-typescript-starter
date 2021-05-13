import { GetCategoryById } from './getCategoryById'
import { Request, Response } from 'express'
//Controller

export class GetCategoryByIdController {
    private useCase: GetCategoryById;

    constructor(getCategoryById: GetCategoryById) {
        this.useCase = getCategoryById;
    }
      
    public async execute(req: Request, res: Response) {

        const { id } = req.body
        if (!id) {
            return res.status(400).json({
                error: {
                    message: 'Id is required'
                }
            });
        }
        const category = await this.useCase.findCategoryIdService(id);
        return  res.status(200).json(category);
    }
}
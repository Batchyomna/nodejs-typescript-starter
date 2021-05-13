import { DeleteCategoryById } from './deleteCategoryById'
import { Request, Response } from 'express'

//Controller qui appelle la service 

export class DeleteCategoryByIdController {
    private useCase: DeleteCategoryById;

    constructor(DeleteCategoryById: DeleteCategoryById) {
        this.useCase = DeleteCategoryById;
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
        const category = await this.useCase.deleteCategoryByIdService(id);
       return  res.status(200).json(category);
    }
}
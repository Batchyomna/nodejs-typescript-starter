import { EditCategoryById } from './editCategoryById'
import { Request, Response } from 'express'
//Controller qui appelle la service 

export class EditCategoryByIdController {
    private useCase: EditCategoryById;

    constructor(editCategoryById: EditCategoryById) {
        this.useCase = editCategoryById;
    }
      
    public async execute(req: Request, res: Response) {

        const { id, name, description } = req.body
        if (!id) {
            return res.status(400).json({
                error: {
                    message: 'Id is required'
                }
            });
        }


        const category = await this.useCase.editCategoryIdService(id,{ name, description });
         console.log('in the controller', category);
         
       return  res.status(200).json(category);
    }
}
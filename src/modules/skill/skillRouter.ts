import {Router} from 'express'
const skillRouter : Router = Router()

skillRouter.get('/', (req, res)=>{
    console.log('req', req);
    
    res.json('skill')
})

export { skillRouter}
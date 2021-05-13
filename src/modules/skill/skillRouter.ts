import {Router} from 'express'
const skillRouter : Router = Router()

skillRouter.get('/skill', (req, res)=>{
    console.log('req', req);
    
    res.json('skill')
})

export { skillRouter}
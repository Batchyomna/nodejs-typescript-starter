const jwt = require('jsonwebtoken')
import {TOKEN_SECRET} from '../constant'

export const createToken = (id: number) => {
   return jwt.sign({data: id}, TOKEN_SECRET, { expiresIn: '1h' })
}
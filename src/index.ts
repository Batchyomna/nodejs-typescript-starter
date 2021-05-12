import { createServer } from './app/http/app'
import { createConnection } from 'typeorm'

import { User } from './app/database/typeorm/entities/user'

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: process.env.MOT_PASSE,
    database: "skilltree_dev",
    synchronize: true,
    logging: true,
    entities: [User]
}).then(() => {
    console.log('connection established'); //ici skill.create() pour tester 
})


createServer();
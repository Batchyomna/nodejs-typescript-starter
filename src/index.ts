import { createServer } from './app/http/app'
import { createConnection } from 'typeorm'

// import { User } from './app/database/typeorm/entities/user'

import { typeORMConfig } from './app/database/typeorm'




// cette fontion va remplacer l'autre façon

createConnection(typeORMConfig).then(_ => {
    createServer();  // creat this server after the connection
})

// createConnection({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: process.env.MOT_PASSE,
//     database: "skilltree_dev",
//     synchronize: true,
//     logging: true,
//     entities: [User]
// }).then(() => {
//     console.log('connection established'); //ici skill.create() pour tester 
// })



 
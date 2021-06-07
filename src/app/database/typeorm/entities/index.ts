  
import { User } from './user'
import { Skill } from './skill'
import { Category } from './category'
import {Level} from './level'
import {Progress} from './progress'
import {Student} from './student'

const entities = [Category,User, Student, Skill,  Level, Progress]
const entitiesObject = {Category,User,Student,  Skill,  Level, Progress }

export { entities, entitiesObject }
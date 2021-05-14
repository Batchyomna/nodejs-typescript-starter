// Domain : Level
interface ILevel {
    id: number
    number :number
    name: string
}
export type LevelProps = {
    id: number
    number :number
    name: string
}
export class Level implements ILevel{
    public id: number
    public number: number
    public name: string

    constructor(props :LevelProps){
        this.id = props.id
        this.number = props.number
        this.name = props.name



    }
}
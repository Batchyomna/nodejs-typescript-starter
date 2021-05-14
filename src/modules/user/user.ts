//Domain : Skill

interface ISkill {
    id: number
    name: string
    description : string

}

export type SkillProps = {
    id: number
    name: string
    description: string
}

export class Skill implements ISkill {
    public id: number
    public name: string
    public description : string

    constructor(props: SkillProps) {
        this.id = props.id
        this.name = props.name
        this.description =props.description
    }
}
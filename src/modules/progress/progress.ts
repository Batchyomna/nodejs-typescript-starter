// Domaine : Progress 


interface IProgress {
    id: number
   
}

export type progressProps = {
    id: number
    
}

export class Progress implements IProgress{
  public  id: number

  constructor(props : progressProps){
      this.id = props.id
       
  }
}
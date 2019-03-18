export class Task implements ITask{
  constructor(
    public date: string,
    public discription: string,
    public done: boolean = false,
    public isEdit: boolean = false
  ){}
}


export interface ITask {
  date: string;
  discription: string;
  done: boolean;
  isEdit: boolean;
}




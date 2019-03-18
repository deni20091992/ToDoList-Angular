import {Task} from './task-list/add-task/tasks';

export class DataService {

  private data: Task[] = [];

  public get getData(): Task[] {
    return this.data;
  }

  public saveLocal(): void {
    localStorage.setItem('todo', JSON.stringify(this.data));
  }

  public loadLocal(): void {
    if (localStorage.getItem('todo')) {
      this.data = JSON.parse(localStorage.getItem('todo'));
    }
  }

  public addData(date: string, discription: string): void {
    this.data.unshift(new Task(date, discription));
  }
}

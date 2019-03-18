import {Task} from './task-list/add-task/tasks';

export interface DataServiseInterface {
  date: Task;
  saveLocal(): void;
  loadLocal(): void;
  addData(date: string, discription: string): void;
}

import {Component, OnInit} from '@angular/core';
import {DataService} from '../../date.service';
import {Task} from '../add-task/tasks';
import {ITask} from '../add-task/tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  items: Task[] = [];

  constructor(private dataService: DataService) {
  }

  public ngOnInit(): void {
    this.dataService.loadLocal();
    this.items = this.dataService.getData;
  }

  private deleteTask(index: number): void {
    this.items.splice(index, 1);
    this.dataService.saveLocal();
  }

  private editTask(task): void {
    task.isEdit = !task.isEdit;
    this.dataService.saveLocal();
  }

  private sortAscending() {
    this.items.sort((a: ITask, b: ITask): number => {
      const firstDate = this.getMillisecondsDate(b.date);
      const secondDate = this.getMillisecondsDate(a.date);

      return secondDate - firstDate;
    });
  }

  private sortDescending(): void {
    this.items.sort((a: ITask, b: ITask): number => {
      const firstDate = this.getMillisecondsDate(b.date);
      const secondDate = this.getMillisecondsDate(a.date);

      return firstDate - secondDate;
    });
  }

  private getMillisecondsDate(value: string): number {
    return Number(new Date(value));
  }

  private sortDescendingBusines(): void {
    this.items.sort((a: ITask, b: ITask): number => {
        return (b.discription > a.discription) ? 1 : -1;
      }
    );
  }

  private sortAscendingBusines(): void {
    this.items.sort((a: ITask, b: ITask): number => {
        return (a.discription > b.discription) ? 1 : -1;
      }
    );
  }

  private done(task: ITask, index: number): void {
    task.done = !task.done;
  /*  if (task.done) {
      this.items.splice(index, 1);
      this.items.push(task);
    } else {
      this.items.splice(index, 1);
      this.items.unshift(task);
    }*/
    this.dataService.saveLocal();
  }

  private isEditTask(task: ITask): string {
    return task.isEdit ? 'solid 1px #e0e0e0' : 'none';
  }
}



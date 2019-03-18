import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../date.service';
import {Task} from './tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  private form: FormGroup = new FormGroup({
    task: new FormControl(),
    date: new FormControl(),
  });

  items: Task[] = [];

  constructor(private dataService: DataService) {
  }

 private addItem(date: string, discription: string): void {
    if (!date || !discription) {
      return;
    }

    this.dataService.addData(date, discription);
    this.dataService.saveLocal();
    this.form.reset();
  }

 private submit(): void {
    console.log(this.form.value);
  }

}

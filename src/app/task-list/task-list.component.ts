import { Component, OnInit } from '@angular/core';
import {DataService} from '../date.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [DataService]
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

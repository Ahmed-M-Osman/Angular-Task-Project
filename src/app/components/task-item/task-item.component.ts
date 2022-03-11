import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {Task} from '../../Task'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()
  task!: Task;
  @Output() onDeletTask: EventEmitter<Task> = new EventEmitter();

  faTime = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: any){
    this.onDeletTask.emit(task);
  }

}
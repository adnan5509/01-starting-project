import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
  @Input() task!: Task;

  constructor(private taskService: TasksService) { }

  onCompleteTask() {
    this.taskService.completeTask(this.task.id);
  }
}

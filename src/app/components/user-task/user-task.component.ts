import { Component, Input } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {

  @Input() task!: Task;

  completeTask() {
    throw new Error('Method not implemented.');
  }


}

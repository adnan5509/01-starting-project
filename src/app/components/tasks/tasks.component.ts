import { Component, Input } from '@angular/core';
import { UserTaskComponent } from "../user-task/user-task.component";
import { User } from '../model/user.model';
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [UserTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks = dummyTasks;
  @Input() selectedUser?: User;


get userTasks() {
    return this.tasks.filter(task => task.userId === this.selectedUser?.id);
}

  onAddTask() {
    throw new Error('Method not implemented.');
  }

}

import { Component, Input } from '@angular/core';
import { UserTaskComponent } from "./user-task/user-task.component";
import { User } from '../user/user.model';
import { dummyTasks } from '../../dummy-tasks';
import { AddTaskComponent } from "./add-task/add-task.component";
import { NewTaskData } from './add-task/newTaskData.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [UserTaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = dummyTasks;
  @Input({required: true}) selectedUser!: User;
  showAddTask = false;

  constructor(private tasksService: TasksService) { }

  get userTasks() {
    return this.tasksService.selectedUserTasks(this.selectedUser?.id!);
  }

  onAddTask() {
    this.showAddTask = !this.showAddTask;
  }

  closeAddTaskDialog() {
    this.showAddTask = false;
  }
}

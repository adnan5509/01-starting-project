import { Component, Input } from '@angular/core';
import { UserTaskComponent } from "../user-task/user-task.component";
import { User } from '../model/user.model';
import { dummyTasks } from '../dummy-tasks';
import { AddTaskComponent } from "../add-task/add-task.component";
import { NewTaskData } from '../model/newTaskData.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [UserTaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks = dummyTasks;
  @Input() selectedUser?: User;
  showAddTask = false;


  get userTasks() {
    return this.tasks.filter(task => task.userId === this.selectedUser?.id);
  }

  onAddTask() {
    this.showAddTask = !this.showAddTask;
  }

  completeTask($event: string) {
    this.tasks = this.tasks.filter(task => task.id !== $event);
  }

  closeAddTaskDialog() {
    this.showAddTask = false;
  }

  submitAddedTask($event: NewTaskData) {
    this.tasks.unshift({
      id: Math.random().toString(),
      title: $event.title,
      summary: $event.summary,
      dueDate: $event.dueDate,
      userId: this.selectedUser!.id
    });
    this.showAddTask = false;
  }
}

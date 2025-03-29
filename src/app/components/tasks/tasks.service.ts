import { Injectable } from '@angular/core';
import { dummyTasks } from '../../dummy-tasks';
import { NewTaskData } from './add-task/newTaskData.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  tasks = dummyTasks;

  selectedUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  submitNewTask(newTaskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: Math.random().toString(),
      title: newTaskData.title,
      summary: newTaskData.summary,
      dueDate: newTaskData.dueDate,
      userId: userId
    });
  }

}

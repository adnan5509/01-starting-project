import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './newTaskData.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  newTaskTitle = '';
  newTaskSummary = '';
  newTaskDueDate = '';

  constructor(private tasksService: TasksService) { }

  OnCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.submitNewTask({
      title: this.newTaskTitle,
      summary: this.newTaskSummary,
      dueDate: this.newTaskDueDate
    }, this.userId);
    this.close.emit();
  }
}

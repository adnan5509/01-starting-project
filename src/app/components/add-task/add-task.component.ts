import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './newTaskData.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskData>();
  newTaskTitle = '';
  newTaskSummary = '';
  newTaskDueDate = '';

  OnCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title: this.newTaskTitle,
      summary: this.newTaskSummary,
      dueDate: this.newTaskDueDate
    });
  }

}

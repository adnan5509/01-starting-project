import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../model/task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {

  @Input() task!: Task;
  @Output() completeTask = new EventEmitter<string>();

  onCompleteTask() {
    this.completeTask.emit(this.task.id);
  }


}

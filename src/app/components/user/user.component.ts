import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../model/user.model';
// Ensure the correct path to the User model
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() selectUser = new EventEmitter<string>();

  get userAvatarImage() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}

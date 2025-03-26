import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  @Input({ required: true }) userAvatar!: string;
  @Output() selectUser = new EventEmitter<string>();


  get userAvatarImage() {
    return 'assets/users/' + this.userAvatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.userId);
  }
}

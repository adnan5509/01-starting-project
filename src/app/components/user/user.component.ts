import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  randomUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];

  get userAvatarImage() {
    return 'assets/users/' + this.randomUser.avatar;
  }

  showClickedUserName() {
    this.randomUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
  }
}

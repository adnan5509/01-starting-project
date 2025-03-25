import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  randomUser = signal(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
  userAvatarImage = computed(() => 'assets/users/' + this.randomUser().avatar)

  showClickedUserName() {
    this.randomUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
  }
}

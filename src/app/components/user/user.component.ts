import { Component, computed, input, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userName = input.required<string>();
  userAvatar = input.required<string>();

  userAvatarImage = computed(() => 'assets/users/'+this.userAvatar());


  showClickedUserName() {
    alert('User name is: ' + this.userName());
  }
}

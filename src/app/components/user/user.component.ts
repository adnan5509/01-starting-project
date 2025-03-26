import { Component, computed, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) userName!: string;  
  @Input({required: true}) userAvatar!: string;  


  get userAvatarImage ()
  {
    return 'assets/users/'+this.userAvatar;
  }

  showClickedUserName() {
    alert('User name is: ' + this.userName);
  }
}

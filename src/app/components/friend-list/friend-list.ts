
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friend-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './friend-list.html',
  styleUrl: './friend-list.css'
})
export class FriendList {

  friends: string[] = ['Sami', 'Youssef', 'Amine'];

  friendName: string = '';

  addFriend(): void {
    if (this.friendName.trim() !== '') {
      this.friends.push(this.friendName.trim());
      this.friendName = '';
    }
  }
}

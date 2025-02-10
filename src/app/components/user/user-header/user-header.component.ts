import { Component, input, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
  standalone: true,
  imports: [IonIcon],
})
export class UserHeaderComponent implements OnInit {
  username = input('');

  constructor(private userService: UserService) {}

  ngOnInit() {}

  // TODO implementar foto
  // changeImage(): void {
  //   this.userService.changeImage();
  // }
}

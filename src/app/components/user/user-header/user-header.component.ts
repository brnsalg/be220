import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
  standalone: true,
  imports: [IonIcon],
})
export class UserHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

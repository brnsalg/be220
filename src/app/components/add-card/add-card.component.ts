import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
  standalone: true,
  imports: [IonIcon],
})
export class AddCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

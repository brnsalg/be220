import { NgClass } from '@angular/common';
import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class CardComponent implements OnInit {
  highlightText = input();
  mainText = input();
  imagePath = input();

  constructor() {}

  ngOnInit() {}
}

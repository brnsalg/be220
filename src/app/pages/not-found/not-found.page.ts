import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, CommonModule, FormsModule],
})
export class NotFoundPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  backToLogin(): void {
    this.router.navigate(['/auth']);
  }
}

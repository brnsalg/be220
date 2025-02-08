import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenu,
  IonMenuButton,
  IonButtons,
  IonIcon,
} from '@ionic/angular/standalone';
import { CardComponent } from "../../components/card/card.component";
import { UserHeaderComponent } from "../../components/user/user-header/user-header.component";
import { AddCardComponent } from "../../components/add-card/add-card.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenu,
    IonMenuButton,
    IonButtons,
    IonIcon,
    CardComponent,
    UserHeaderComponent,
    AddCardComponent
],
})
export class HomePage {
  constructor() {}
}

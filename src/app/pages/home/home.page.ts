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
  IonCard,
  IonChip,
} from '@ionic/angular/standalone';
import { CardComponent } from "../../components/card/card.component";
import { UserHeaderComponent } from "../../components/user/user-header/user-header.component";

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
    IonCard,
    IonChip,
    CardComponent,
    UserHeaderComponent
],
})
export class HomePage {
  constructor() {}
}

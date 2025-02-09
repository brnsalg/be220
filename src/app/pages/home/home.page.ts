import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenu,
  IonMenuButton,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { CardComponent } from '@components/card/card.component';
import { UserHeaderComponent } from '@components/user/user-header/user-header.component';
import { AddCardComponent } from '@components/add-card/add-card.component';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { ToolboxService } from '@services/toolbox.service';

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
    IonButton,
    IonIcon,
    CardComponent,
    UserHeaderComponent,
    AddCardComponent,
  ],
})
export class HomePage {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toolboxService: ToolboxService
  ) {}

  getMyExercises() {
    return [
      {
        highlightText: '',
        mainText: 'PERSONAL YOGA',
        imagePath: 'assets/jpg/exercise_2.jpg',
      },
      {
        highlightText: '',
        mainText: 'PERSONAL GINASTICA RITMICA',
        imagePath: 'assets/jpg/exercise_3.jpg',
      },
    ];
  }

  getProgramExercises() {
    return [
      {
        highlightText: 'continuar treinando',
        mainText: 'LEVANTAMENTO DE PESO',
        imagePath: 'assets/jpg/exercise_1.jpg',
      },
      {
        highlightText: '',
        mainText: 'YOGA EXPRESS',
        imagePath: 'assets/jpg/exercise_2.jpg',
      },
    ];
  }

  getContent() {
    return [
      {
        highlightText: '',
        mainText: '',
        imagePath: '',
      },
      {
        highlightText: '',
        mainText: '',
        imagePath: '',
      },
    ];
  }

  logout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/auth']);
    }),
      () => {
        this.toolboxService.alert(
          'Erro no Logout!',
          'Houve um problema ao tentar fazer o logout. Por favor, tente novamente mais tarde.'
        );
      };
  }
}

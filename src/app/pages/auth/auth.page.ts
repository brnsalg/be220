import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonInput,
  IonButton,
  IonSpinner,
} from '@ionic/angular/standalone';
import { AuthService } from '@services/auth.service';
import { ToolboxService } from '@services/toolbox.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [
    IonSpinner,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonInput,
    IonButton,
    IonSpinner,
  ],
})
export class AuthPage implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isLoading: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toolboxService: ToolboxService
  ) {
    this.isLoading = false;
    this.loginForm = new FormGroup<{
      email: FormControl<string>;
      password: FormControl<string>;
    }>({
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
    });
  }

  ngOnInit() {
    this.loginForm.reset();
  }

  ngOnDestroy() {
    this.loginForm.reset();
  }

  async login(): Promise<void> {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.isLoading = true;

      try {
        await this.authService.login(email, password).then(
          () => {
            this.router.navigate(['/home']);
          },
          () => {
            this.toolboxService.alert(
              'Erro no Login!',
              'Houve um problema ao tentar fazer o login. Por favor, tente novamente mais tarde.'
            );
          }
        );
      } catch (error) {
        // console.log(error);
      } finally {
        this.isLoading = false;
      }

      this.loginForm.reset();
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}

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
  AlertController,
  IonSpinner,
} from '@ionic/angular/standalone';
import { AuthService } from '@services/auth.service';
import { ToolboxService } from '@services/toolbox.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonInput,
    IonButton,
    IonSpinner,
  ],
})
export class RegisterPage implements OnInit, OnDestroy {
  registerForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toolboxService: ToolboxService
  ) {
    this.registerForm = new FormGroup<{
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
    this.registerForm.reset();
  }

  ngOnDestroy() {
    this.registerForm.reset();
  }

  async register(): Promise<void> {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.getRawValue();
      this.isLoading = true;

      try {
        await this.authService.createUser(email, password).then(
          () => {
            this.router.navigate(['/home']);
          },
          () => {
            this.toolboxService.alert(
              'Erro no Cadastro!',
              'Houve um problema ao tentar realizar o cadastro. Por favor, verifique os dados e tente novamente mais tarde.'
            );
          }
        );
      } catch (error) {
        // console.log(error);
      } finally {
        this.isLoading = false;
      }

      this.registerForm.reset();
    }
  }

  goToLogin(): void {
    this.router.navigate(['/auth']);
  }
}

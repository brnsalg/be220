import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { AuthService } from '@services/auth.service';

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
  ],
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup<{
      name: FormControl<string>;
      email: FormControl<string>;
      password: FormControl<string>;
    }>({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
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

  async register(): Promise<void> {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.getRawValue();

      try {
        await this.authService.createUser(email, password, name).then(
          () => {
            this.router.navigate(['/auth']);
          },
          () => {
            // TODO MODAL ERROR
            // TODO ANIMACAO LOAD
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  }

  goToLogin(): void {
    this.router.navigate(['/auth']);
  }
}

import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly loginSubmitting = signal(false);
  readonly loginError = signal<string | null>(null);

  readonly registerSubmitting = signal(false);
  readonly registerError = signal<string | null>(null);

  readonly loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  readonly registerForm = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]],
  });

  submitLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.getRawValue();
    this.loginSubmitting.set(true);
    this.loginError.set(null);

    this.authService.signIn(email, password).subscribe({
      next: () => {
        this.loginSubmitting.set(false);
        this.router.navigateByUrl('/');
      },
      error: (message: string) => {
        this.loginSubmitting.set(false);
        this.loginError.set(message);
      },
    });
  }

  submitRegister(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { name, email, password, confirmPassword } = this.registerForm.getRawValue();
    if (password !== confirmPassword) {
      this.registerError.set('Passwords do not match.');
      return;
    }

    this.registerSubmitting.set(true);
    this.registerError.set(null);

    this.authService.signUp(name, email, password).subscribe({
      next: () => {
        this.registerSubmitting.set(false);
        this.router.navigateByUrl('/');
      },
      error: (message: string) => {
        this.registerSubmitting.set(false);
        this.registerError.set(message);
      },
    });
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  emailVerified: boolean;
  image: string | null;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/auth`;

  readonly currentUser = signal<AuthUser | null>(null);
  readonly sessionLoaded = signal(false);

  refreshSession(): Observable<AuthUser | null> {
    return this.http
      .get<{ user: AuthUser } | null>(`${this.baseUrl}/get-session`, { withCredentials: true })
      .pipe(
        map((res) => res?.user ?? null),
        tap((user) => {
          this.currentUser.set(user);
          this.sessionLoaded.set(true);
        }),
        catchError(() => {
          this.currentUser.set(null);
          this.sessionLoaded.set(true);
          return of(null);
        })
      );
  }

  signUp(name: string, email: string, password: string): Observable<AuthUser> {
    return this.http
      .post<{ user: AuthUser }>(
        `${this.baseUrl}/sign-up/email`,
        { name, email, password },
        { withCredentials: true }
      )
      .pipe(
        map((res) => res.user),
        tap((user) => this.currentUser.set(user)),
        catchError((err) => throwError(() => AuthService.extractError(err)))
      );
  }

  signIn(email: string, password: string): Observable<AuthUser> {
    return this.http
      .post<{ user: AuthUser }>(
        `${this.baseUrl}/sign-in/email`,
        { email, password },
        { withCredentials: true }
      )
      .pipe(
        map((res) => res.user),
        tap((user) => this.currentUser.set(user)),
        catchError((err) => throwError(() => AuthService.extractError(err)))
      );
  }

  signOut(): Observable<void> {
    return this.http
      .post<void>(`${this.baseUrl}/sign-out`, {}, { withCredentials: true })
      .pipe(
        tap(() => this.currentUser.set(null)),
        catchError((err) => throwError(() => AuthService.extractError(err)))
      );
  }

  private static extractError(err: unknown): string {
    if (err instanceof HttpErrorResponse) {
      const message = (err.error as { message?: string } | null)?.message;
      if (message) return message;
      if (err.status === 0) return 'Could not reach the server. Please try again.';
    }
    return 'Something went wrong. Please try again.';
  }
}

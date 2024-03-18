import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isAuthenticated) {
      return true;
    } else {
      // Redirect to login page if not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }

  setAuthenticated(value: boolean): void {
    this.isAuthenticated = value;
  }
}

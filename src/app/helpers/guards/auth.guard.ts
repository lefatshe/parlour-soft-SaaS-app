import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService, private router: Router) {
  }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/account']);
    }
    return !this.authService.isLoggedIn();
  }

}

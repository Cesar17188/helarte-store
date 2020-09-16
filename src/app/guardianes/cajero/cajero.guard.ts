import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CajeroGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean{
  return this.authService.user$.pipe(
    take(1),
    map((user) => user && this.authService.isCashier(user)),
    tap((canEdit) => {
      if (!canEdit) {
        window.alert('Acces denied');
        this.router.navigate(['home']);
        }
      })
    );
  }
}

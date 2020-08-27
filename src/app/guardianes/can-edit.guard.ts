import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { AuthService } from '../core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanEditGuard implements CanActivate {
  constructor(private authService: AuthService){}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean  {
    return this.authService.user$.pipe(
      take(1),
      map((user) => user && this.authService.isCashier(user)),
      tap((canEdit) => {
        if (!canEdit) {
          window.alert('access denied. Must have permission to edit.');
        }
      })
    );
  }

}

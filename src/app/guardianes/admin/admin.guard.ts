import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { AuthService } from '@core/services/auth/auth.service';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean{
  //   if (this.authService.user$) {
  //     return true;
  //   }else {
  //     this.router.navigate(['home']);
  //     return false;
  //   }
  // }
  return this.authService.user$.pipe(
    take(1),
    map((user) => user && this.authService.isAdmin(user)),
    tap((canEdit) => {
      if (!canEdit) {
        window.alert('Acces denied');
        this.router.navigate(['home']);
        }
      })
    );
  }
}

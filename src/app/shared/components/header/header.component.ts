import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CartService } from './../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;
  title = 'helados y crepes';
  public user$: Observable<User> = this.authService.afa.user;
  Huser = false;

  constructor(
    private cartService: CartService,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService
  ) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
    this.user$ = this.authService.hasUser();
  }

  panelOpenState = false;
  ngOnInit(): void {

  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '80%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('login cerrado');
    });
  }

  logout() {
    this.authService.logout()
    .then(() => {
      this.router.navigate(['./home']);
    });
  }

}

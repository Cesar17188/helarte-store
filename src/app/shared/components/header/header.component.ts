import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { CartService } from './../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;
  title = 'helados y crepes';
  constructor(
    private cartService: CartService,
    public dialog: MatDialog
  ) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }

  ngOnInit(): void {
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '50%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('login cerrado');
    });
  }

}

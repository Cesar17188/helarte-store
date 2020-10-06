import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@core/models/user';
import { AuthService } from '@core/services/auth/auth.service';
import { async } from '@angular/core/testing';
import { UsersService } from '@core/services/users/users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  email: string;
  usuarios: User[];
  public user$: Observable<User> = this.authService.afa.user;
  usuario: User[];
  user: any;
  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {
    this.user$ = this.authService.hasUser();
  }

  ngOnInit(): void {
    this.authService.hasUser().subscribe(
      data => {
        this.email = data.email;
        this.getUsuario(this.email);
      }
    );
  }

  getUsuario(email: string) {
    this.userService.getUser(email).subscribe( data => {
      this.usuario = data.map (e => {
        return {
          // tslint:disable-next-line: no-string-literal
          uid: e.payload.doc.data()['uid'],
          // tslint:disable-next-line: no-string-literal
          role: e.payload.doc.data()['role'],
          // tslint:disable-next-line: no-string-literal
          photoURL: e.payload.doc.data()['photoURL'],
          // tslint:disable-next-line: no-string-literal
          password: e.payload.doc.data()['password'],
          // tslint:disable-next-line: no-string-literal
          displayName: e.payload.doc.data()['displayName'],
          // tslint:disable-next-line: no-string-literal
          email: e.payload.doc.data()['email'],
        };
      });
      console.log(this.usuario);
    });
  }
  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.usuarios = data.map( e => {
        return {
          // tslint:disable-next-line: no-string-literal
          uid: e.payload.doc.data()['uid'],
          // tslint:disable-next-line: no-string-literal
          displayName: e.payload.doc.data()['displayName'],
          // tslint:disable-next-line: no-string-literal
          role: e.payload.doc.data()['role'],
          // tslint:disable-next-line: no-string-literal
          email: e.payload.doc.data()['email'],
          // tslint:disable-next-line: no-string-literal
          photoURL: e.payload.doc.data()['photoURL']
        };
      });
      console.log(this.usuarios);
    });
  }

}

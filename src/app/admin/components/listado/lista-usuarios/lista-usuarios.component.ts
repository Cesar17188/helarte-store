import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { UsersService } from '@core/services/users/users.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios = [];
  img: any;
  data: any;
  displayedColumns: string[] = ['uid', 'usuario', 'role', 'actions'];

  constructor(
    private usuariosService: UsersService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
  }

  getUsuarios() {
    this.usuariosService.getUsers().subscribe(data => {
      this.usuarios = data.map( e => {
        // tslint:disable-next-line: no-string-literal
        const ref = this.storage.storage.refFromURL(e.payload.doc.data()['photoURL']);
        this.img = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          // tslint:disable-next-line: no-string-literal
          uid: e.payload.doc.data()['uid'],
          // tslint:disable-next-line: no-string-literal
          displayName: e.payload.doc.data()['displayName'],
          // tslint:disable-next-line: no-string-literal
          email: e.payload.doc.data()['email'],
          img: this.img,
          // tslint:disable-next-line: no-string-literal
          role: e.payload.doc.data()['role'],
        };
      });
      console.log(this.usuarios);
    });
  }

  // deleteUser(documentId: string) {
  //   this.usuariosService.(documentId);
  // }

}

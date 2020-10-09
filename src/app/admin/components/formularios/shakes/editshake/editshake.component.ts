import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ShakesService } from '@core/services/shakes/shakes.service';

@Component({
  selector: 'app-editshake',
  templateUrl: './editshake.component.html',
  styleUrls: ['./editshake.component.css']
})
export class EditshakeComponent implements OnInit {

  newShake = [];
  image$: Observable<any>;
  form: FormGroup;
  codigo: string;
  documentId: string;
  img: any;

  constructor(
    private formBuilder: FormBuilder,
    private shakeService: ShakesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.codigo = params.codigo;
      this.fetchShake(this.codigo);
    });
  }

  saveShake(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const shake = this.form.value;
      this.shakeService.updateShake(this.newShake[0].id, shake);
      console.log(shake);
      this.form.reset();
      this.router.navigate(['./admin/productos']);
    }
  }

  fetchShake(codigo: string) {
    this.shakeService.getShake(codigo).subscribe(data => {
      this.newShake = data.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.img = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.img,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioVenta: e.payload.doc.data().precioVenta
        };
      });
      this.form.patchValue(this.newShake[0]);
      console.log(this.newShake);
    });
  }

  // uploadFile(event) {
  //   this.img = null;
  //   const file = event.target.files[0];
  //   const name = file.name;
  //   const fileRef = this.storage.ref(name);
  //   const task = this.storage.upload(name, file);

  //   task.snapshotChanges()
  //   .pipe(
  //     finalize(() => {
  //       this.image$ = fileRef.getDownloadURL();
  //       this.image$.subscribe(url => {
  //         console.log(url);
  //         this.form.get('image').setValue(url);
  //       });
  //     })
  //   )
  //   .subscribe();
  // }


  private buildForm() {
    this.form = this.formBuilder.group({
      producto: ['', [Validators.required]],
      descripcion_corta: ['', [Validators.required]],
      descripcion_larga: ['', [Validators.required]],
      precioVenta: [0, [Validators.required]],
      // image: [''],
    });
  }


  get producto() { return this.form.get('producto'); }
  get descripcion_corta() { return this.form.get('descripcion_corta'); }
  get descripcion_larga() { return this.form.get('descripcion_larga'); }
  get precioVenta() { return this.form.get('precioVenta'); }
  // get image() { return this.form.get('image'); }

}

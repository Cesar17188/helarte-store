import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';


import { Product } from 'src/app/core/models/product.model';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HeladosService } from 'src/app/core/services/helados/helados.service';


@Component({
  selector: 'app-edithelado',
  templateUrl: './edithelado.component.html',
  styleUrls: ['./edithelado.component.css']
})
export class EditheladoComponent implements OnInit {

  newHelado = [];
  image$: Observable<any>;
  form: FormGroup;
  codigo: string;
  documentId: string;
  img: any;

  constructor(
    private formBuilder: FormBuilder,
    private heladoService: HeladosService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.codigo = params.codigo;
      this.fetchHelado(this.codigo);
    });
  }

  saveHelado(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const helado = this.form.value;
      this.heladoService.updateHelado(this.newHelado[0].id, helado);
      console.log(helado);
      this.form.reset();
      this.router.navigate(['./admin/productos']);
    }
  }

  fetchHelado(codigo: string) {
    this.heladoService.getHelado(codigo).subscribe(data => {
      this.newHelado = data.map ( e => {
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
      this.form.patchValue(this.newHelado[0]);
      console.log(this.newHelado);
    });
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const name = file.name;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe();
  }


  private buildForm() {
    this.form = this.formBuilder.group({
      producto: ['', [Validators.required]],
      descripcion_corta: ['', [Validators.required]],
      descripcion_larga: ['', [Validators.required]],
      precioVenta: [0, [Validators.required]],
      image: [''],
    });

  }


  get producto() { return this.form.get('producto'); }
  get descripcion_corta() { return this.form.get('descripcion_corta'); }
  get descripcion_larga() { return this.form.get('descripcion_larga'); }
  get precioVenta() { return this.form.get('precioVenta'); }
  get image() { return this.form.get('image'); }

}

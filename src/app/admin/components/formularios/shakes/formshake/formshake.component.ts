import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Product } from '@core/models/product.model';
import { ShakesService } from '@core/services/shakes/shakes.service';

@Component({
  selector: 'app-formshake',
  templateUrl: './formshake.component.html',
  styleUrls: ['./formshake.component.css']
})
export class FormshakeComponent implements OnInit {

  newShake: Product;
  image$: Observable<any>;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private shakesService: ShakesService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  saveShake(event: Event) {
    event.preventDefault();
    const shake = this.form.value;
    this.shakesService.createShake(shake).then(resp => {
      this.form.reset();
      console.log(resp);
      this.router.navigate(['./admin/productos']);
    })
    .catch(error => {
      console.log(error);
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
      codigo: ['', [Validators.required]],
      producto: ['', [Validators.required]],
      descripcion_corta: ['', [Validators.required]],
      descripcion_larga: ['', [Validators.required]],
      precioVenta: [0, [Validators.required]],
      image: [''],
    });
  }

  get codigo() { return this.form.get('codigo'); }
  get producto() { return this.form.get('producto'); }
  get descripcion_corta() { return this.form.get('descripcion_corta'); }
  get descripcion_larga() { return this.form.get('descripcion_larga'); }
  get precioVenta() { return this.form.get('precioVenta'); }
  get image() { return this.form.get('image'); }

}

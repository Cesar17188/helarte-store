import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HeladosService } from './../../../../core/services/helados/helados.service';
import { Product } from 'src/app/product.model';


@Component({
  selector: 'app-formhelado',
  templateUrl: './formhelado.component.html',
  styleUrls: ['./formhelado.component.css']
})
export class FormheladoComponent implements OnInit {

  newHelado: Product;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private heladoService: HeladosService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  // saveProduct(event: Event) {
  //   event.preventDefault();
  //   if (this.form.valid) {
  //     const helado = this.form.value;
  //     this.heladoService.createHelado(helado)
  //     .subscribe((newHelado) => {
  //       console.log(newHelado);
  //       this.router.navigate(['./admin/productos'])
  //     });
  //   }
  //   console.log(this.form.value);
  // }

  saveHelado(event: Event) {
    event.preventDefault();
    const helado = this.form.value;
    this.heladoService.createHelado(helado).then(resp => {
      this.form.reset();
      console.log(resp);
      this.router.navigate(['./admin/productos']);
    })
    .catch(error => {
      console.log(error);
    });
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

}

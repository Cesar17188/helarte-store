import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { TOPPING } from '@core/models/topping.model';
import { ToppingSalService } from '@core/services/topping-sal/topping-sal.service';

@Component({
  selector: 'app-toppings-sal',
  templateUrl: './toppings-sal.container.html',
  styleUrls: ['./toppings-sal.container.css']
})
// tslint:disable-next-line: component-class-suffix
export class ToppingsSalContainer implements OnInit {

  toppingsS: TOPPING[];
  data: any;
  img: any;

  constructor(
    private toppingService: ToppingSalService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.fetchToppings();
  }

  fetchToppings() {
    this.toppingService.getAllToppingsS().subscribe(data => {
      this.toppingsS = data.map( e => {
        // tslint:disable-next-line: no-string-literal
        const ref = this.storage.storage.refFromURL(e.payload.doc.data()['image']);
        this.img = ref.getDownloadURL();
        return {
          // tslint:disable-next-line: no-string-literal
          codigo: e.payload.doc.data()['codigo'],
          // tslint:disable-next-line: no-string-literal
          producto: e.payload.doc.data()['producto'],
          img: this.img,
          // tslint:disable-next-line: no-string-literal
          descripcion_corta: e.payload.doc.data()['descripcion_corta'],
          // tslint:disable-next-line: no-string-literal
          descripcion_larga: e.payload.doc.data()['descripcion_larga']
        };
      });
      console.log(this.toppingsS);
    });
  }

  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}

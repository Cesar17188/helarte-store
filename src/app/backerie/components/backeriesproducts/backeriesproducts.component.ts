import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { BackeriesService } from '../../../core/services/backeries/backeries.service';

@Component({
  selector: 'app-backeriesproducts',
  templateUrl: './backeriesproducts.component.html',
  styleUrls: ['./backeriesproducts.component.css']
})
export class BackeriesproductsComponent implements OnInit {

  backeries: Product[];

  constructor(
  private backeriesService: BackeriesService
  ) { }

  ngOnInit(): void {
    this.backeries = this.backeriesService.getAllBackeries();
  }

  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }
}

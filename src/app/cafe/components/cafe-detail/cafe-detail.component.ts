import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from 'src/app/core/models/product.model';
import { CafesService } from './../../../core/services/cafes/cafes.service';

@Component({
  selector: 'app-cafe-detail',
  templateUrl: './cafe-detail.component.html',
  styleUrls: ['./cafe-detail.component.css']
})
export class CafeDetailComponent implements OnInit {

  cafe: Product;

  constructor(
    private route: ActivatedRoute,
    private cafesService: CafesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      this.cafe = this.cafesService.getCafe(codigo);
    });
  }

}

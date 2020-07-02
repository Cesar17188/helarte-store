import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { BackeriesService } from '../../../core/services/backeries/backeries.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bakerie-detail',
  templateUrl: './bakerie-detail.component.html',
  styleUrls: ['./bakerie-detail.component.css']
})
export class BakerieDetailComponent implements OnInit {

  backerie: Product;

  constructor(
    private route: ActivatedRoute,
    private bakeriesService: BackeriesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      this.backerie = this.bakeriesService.getBackerie(codigo);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { SnacksService } from 'src/app/core/services/snacks/snacks.service';

@Component({
  selector: 'app-snack-detail',
  templateUrl: './snack-detail.component.html',
  styleUrls: ['./snack-detail.component.css']
})
export class SnackDetailComponent implements OnInit {

  snack: Product;
  constructor(
    private routes: ActivatedRoute,
    private snacksService: SnacksService
  ) { }

  ngOnInit(): void {
    this.routes.params.subscribe((params: Params) => {
      const codigo = params.codigo;
      this.snack = this.snacksService.getSnack(codigo);
    });
  }

}

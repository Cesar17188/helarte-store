import { Component, OnInit } from '@angular/core';
import { SalsasService } from 'src/app/core/services/salsas/salsas.service';
import { SYRUP } from 'src/app/core/models/syrup.model';

@Component({
  selector: 'app-syrups',
  templateUrl: './syrups.component.html',
  styleUrls: ['./syrups.component.css']
})
export class SyrupsComponent implements OnInit {

  syrups: SYRUP[];

  constructor(
    private syrupServices: SalsasService
  ) { }

  ngOnInit(): void {
    this.syrups = this.syrupServices.getAllSalsas();
  }

  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}

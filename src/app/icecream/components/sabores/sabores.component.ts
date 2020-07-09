import { Component, OnInit } from '@angular/core';
import { SaboresService } from 'src/app/core/services/sabores/sabores.service';
import { SABOR } from 'src/app/models/sabor.model';

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.component.html',
  styleUrls: ['./sabores.component.css']
})
export class SaboresComponent implements OnInit {

  sabores: SABOR[];

  constructor(
    private saboresService: SaboresService) { }

  ngOnInit(): void {
    this.sabores = this.saboresService.getAllFlavor();
  }

  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}


import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Product } from '@core/models/product.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '@core/models/dialogoSaborHelado';
import { SaboresContainer } from '../../containers/sabores/sabores.container';

@Component({
  selector: 'app-flavor',
  templateUrl: './flavor.component.html',
  styleUrls: ['./flavor.component.css']
})
export class FlavorComponent implements OnInit {
  @Input() product: Product;
  @Output() productAdd: EventEmitter<any> = new EventEmitter();

    constructor(
    public dialogRef: MatDialogRef<SaboresContainer>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
    }

  today = new Date();
  addcart() {
      console.log('añadir al carrito');
      this.productAdd.emit(this.product.codigo);
  }
  ngOnInit(): void {
  }

  select(): void{
    this.data.codflavor = this.product.codigo;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

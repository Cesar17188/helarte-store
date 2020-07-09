import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TOPPING } from 'src/app/models/topping.model';
import { ToppingsComponent } from '../toppings/toppings.component';
import { DataToppinD } from 'src/app/models/dialogoToppingDulce';

@Component({
  selector: 'app-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.css']
})
export class ToppingComponent implements OnInit {

  @Input() toppingD: TOPPING;
  @Output() toppingAdd: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<ToppingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataToppinD
  ) { }

addcart() {
    console.log('añadir al carrito');
    this.toppingAdd.emit(this.toppingD.codigo);
}
ngOnInit(): void {
}

select(): void{
  this.data.toppingCod = this.toppingD.codigo;
}
onNoClick(): void {
  this.dialogRef.close();
}

}

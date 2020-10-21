import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { SYRUP } from '@core/models/syrup.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { syrupData } from '@core/models/dialogoSyrup';
import { SyrupsContainer} from '../../containers/syrups/syrups.container';


@Component({
  selector: 'app-syrup',
  templateUrl: './syrup.component.html',
  styleUrls: ['./syrup.component.css']
})
export class SyrupComponent implements OnInit {

  @Input() syrup: SYRUP;
  @Output() syrupAdd: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<SyrupsContainer>,
    @Inject(MAT_DIALOG_DATA) public data: syrupData
  ) { }

addcart() {
    console.log('añadir al carrito');
    this.syrupAdd.emit(this.syrup.codigo);
}
ngOnInit(): void {
}

select(): void{
  this.data.codSyrup = this.syrup.codigo;
}
onNoClick(): void {
  this.dialogRef.close();
}


}

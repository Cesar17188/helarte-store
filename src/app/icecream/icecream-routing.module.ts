import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { IceproductsComponent } from './components/iceproducts/iceproducts.component';
import { IcecreamDetailComponent } from './components/icecream-detail/icecream-detail.component';


const routes: Routes = [
    {
        path: '',
        component: IceproductsComponent
    },
    {
        path: ':codigo',
        component: IcecreamDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class IceCreamRoutingModule {}

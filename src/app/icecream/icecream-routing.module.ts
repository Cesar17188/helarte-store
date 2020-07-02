import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { IceproductsComponent } from './components/iceproducts/iceproducts.component';
import { IcecreamDetailComponent } from './components/icecream-detail/icecream-detail.component';
import { SaboresComponent } from './components/sabores/sabores.component';

const routes: Routes = [
    {
        path: '',
        component: IceproductsComponent
    },
    {
        path: ':codigo',
        component: IcecreamDetailComponent
    },
    {
        path: 'sabores',
        component: SaboresComponent
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { BackeriesproductsComponent } from './components/backeriesproducts/backeriesproducts.component';
import { BakerieDetailComponent } from './components/bakerie-detail/bakerie-detail.component';

const routes: Routes = [
    {
        path: '',
        component: BackeriesproductsComponent
    },
    {
        path: ':codigo',
        component: BakerieDetailComponent
    },
];

@NgModule ({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class BackerieRoutingModule {}

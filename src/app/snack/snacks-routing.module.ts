import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router} from '@angular/router';

import { SnacksproductsComponent } from './components/snacksproducts/snacksproducts.component';
import { SnackDetailComponent } from './components/snack-detail/snack-detail.component';

const routes: Routes = [
 {
     path: '',
     component: SnacksproductsComponent
 },
 {
     path: ':codigo',
     component: SnackDetailComponent
 },
];

@NgModule ({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class SnackRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { BackeriesproductsContainer } from './containers/backeriesproducts/backeriesproducts.container';
import { BakerieDetailComponent } from './components/bakerie-detail/bakerie-detail.component';

const routes: Routes = [
    {
        path: '',
        component: BackeriesproductsContainer
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

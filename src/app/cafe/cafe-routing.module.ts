import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { CafesproductsComponent } from './components/cafesproducts/cafesproducts.component';
import { CafeDetailComponent } from './components/cafe-detail/cafe-detail.component';

const routes: Routes = [
    {
        path: '',
        component: CafesproductsComponent
    },
    {
        path: ':codigo',
        component: CafeDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class CafeRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router} from '@angular/router';

import { SaboresComponent } from './components/sabores/sabores.component';

const routes: Routes = [
    {
        path: '',
        component: SaboresComponent
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

export class SaborRoutingModule {}

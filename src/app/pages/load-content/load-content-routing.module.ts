import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadContentComponent } from './load-content.component';

const routes: Routes = [
    { path: '', component: LoadContentComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoadContentRoutingModule { }

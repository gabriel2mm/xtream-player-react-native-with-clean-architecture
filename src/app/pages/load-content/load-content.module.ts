import { NgModule } from '@angular/core';
import { LoadContentComponent } from './load-content.component';
import { PagesModule } from '@pages/pages.module';
import { LoadContentRoutingModule } from './load-content-routing.module';

@NgModule({
    declarations: [LoadContentComponent],
    imports: [LoadContentRoutingModule, PagesModule],
    exports: [LoadContentComponent]
})
export class LoadContentModule { }

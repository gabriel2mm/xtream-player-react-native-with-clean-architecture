import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomemRoutingModule } from './home-routing.module';
import { PagesModule } from '@pages/pages.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [HomemRoutingModule, PagesModule],
    exports: [HomeComponent]
})
export class HomeModule { }

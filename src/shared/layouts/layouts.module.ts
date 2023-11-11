import { NgModule } from '@angular/core';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    ContentLayoutComponent
  ],
  imports: [
    ComponentsModule
  ],
  exports: [
    ContentLayoutComponent
  ]
})
export class LayoutsModule { }

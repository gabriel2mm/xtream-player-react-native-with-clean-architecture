import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentsModule } from "@components/components.module";
import { DirectiveModule } from "@directives/directives.module";
import { LayoutsModule } from "@layouts/layouts.module";

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        DirectiveModule,
        LayoutsModule
    ],
    exports: [
        CommonModule,
        ComponentsModule,
        DirectiveModule,
        LayoutsModule
    ]
})
export class PagesModule{}
import { NgModule } from "@angular/core";
import { LivesComponent } from "./lives.component";
import { PagesModule } from "@pages/pages.module";
import { LivesRoutingModule } from "./lives-routing.module";

@NgModule({
    declarations: [LivesComponent],
    imports: [LivesRoutingModule, PagesModule],
    exports: [LivesComponent]
})
export class LivesModule { }
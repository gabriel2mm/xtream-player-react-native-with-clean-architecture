import { NgModule } from "@angular/core";
import { AccountComponent } from "./account.component";
import { PagesModule } from "@pages/pages.module";
import { AccountRoutingModule } from "./account-routing.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [AccountComponent],
    imports: [
        AccountRoutingModule,
        PagesModule,
        MatButtonModule,
    ],
    exports: [AccountComponent]
})
export class AccountModule { }
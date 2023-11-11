import { NgModule } from "@angular/core";
import { SkeletonModule } from "../components/skeleton/skeleton.module";
import { SkeletonDirective } from "./skeleton.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [SkeletonDirective],
    imports: [CommonModule, SkeletonModule],
    exports: [SkeletonDirective]
})
export class DirectiveModule {}
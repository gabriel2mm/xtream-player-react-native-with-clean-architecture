import { ComponentFactoryResolver, Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, ViewContainerRef } from "@angular/core";
import { SkeletonComponent } from "../components/skeleton/skeleton.component";

@Directive({
    selector: '[skeleton]'
})
export class SkeletonDirective implements OnChanges {
    @Input('skeletonLoading')
    skeletonLoading: boolean = false;

    @Input('skeletonWidth')
    skeletonWidth: string | undefined;

    @Input('skeletonHeight')
    skeletonHeight: string | undefined;

    constructor(
        private renderer: Renderer2,
        private elementRef: ElementRef,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["skeletonLoading"]) {

            this.viewContainerRef.clear();

            if (changes["skeletonLoading"].currentValue) {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');

                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SkeletonComponent);
                const ref = this.viewContainerRef.createComponent(componentFactory);

                Object.assign(ref.instance, {
                    width: this.skeletonWidth,
                    height: this.skeletonHeight
                });
            } else {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
            }
        }
    }
}
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

    @Input() categories: any[] = [];

    @Input() isLoading: boolean = false;

    @Output() SelectedCategory: EventEmitter<any> = new EventEmitter();

    onSelectCategory(category: any, event: MouseEvent) {
        this.SelectedCategory.emit({ category, event });
    }
}

import { Component, OnInit } from "@angular/core";
import { map, mergeMap } from "rxjs";
import { CategoryService } from "@services/category.service";
import { LivesService } from "@services/live.service";

@Component({
    selector: 'app-lives',
    templateUrl: './lives.component.html',
    styleUrls: ['./lives.component.scss']
})
export class LivesComponent implements OnInit {

    contents: any = {};
    categories: any[] = [];
    isLoadingCategory: boolean = false;
    isLoadingContent: boolean = false;
    contentSelected: any | undefined;

    constructor(
        private categoryService: CategoryService,
        private liveService: LivesService,
    ) { }

    ngOnInit(): void {
        this.isLoadingCategory = true;
        this.categoryService.getCategories('get_live_categories')
            .pipe(
                map((response: any[]) => {
                    this.categories = response;
                    return response;
                }),
                mergeMap(() => this.liveService.getLivesByCategoryId(this.categories[0].category_id)),
                map((response: any) => {
                    return response;
                })
            )
            .subscribe({
                next: (response: any) => {
                    this.contents = response;
                },
                error: (err) => console.log(err),
                complete: () => this.isLoadingCategory = false
            });
    }

    onSelectCategory(value: any) {
        this.isLoadingContent = true;
        const { category } = value;

        this.liveService.getLivesByCategoryId(category.category_id).subscribe({
            next: (response: any) => this.contents = response,
            error: (err) => console.log(err),
            complete: () => this.isLoadingContent = false
        })
    }

    onContentSelected(value: any) {
        const { content, event } = value;
        if ((!this.contentSelected  || !this.contentSelected.stream_id) || (!!this.contentSelected && content.stream_id != this.contentSelected.stream_id)) {
            this.contentSelected = content;
        }
    }
}
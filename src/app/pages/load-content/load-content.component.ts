import { Component, OnInit } from '@angular/core';
import { mergeMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { VodService } from '@services/vods.service';
import { CategoryService } from '@services/category.service';
import { AppState } from 'src/app/common/store/state';
import { Store } from '@ngrx/store';
import { allCategories } from '@actions/category.action';
import { allVods } from '@actions/vod.actions';
import { allLives } from '@actions/live.action';
import { allSeries } from '@actions/series.action';

@Component({
    selector: 'app-load-content',
    templateUrl: './load-content.component.html',
    styleUrls: ['./load-content.component.scss'],
})
export class LoadContentComponent implements OnInit {

    constructor(
        private router: Router,
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this.loadCategories();

        this.store.select(state => state)
            .subscribe({
                next: (response) => {

                    if(!!response.category.error
                        || !!response.live.error 
                        || !!response.series.error 
                        || !!response.vod.error){
                            this.router.navigate(['/'], { queryParams: { error: 'true'}});
                    }

                    if (
                        !!response.live.live
                        && response.live.live.length > 0
                        && !!response.category.categories
                        && response.category.categories.length > 0
                        && !!response.series.series
                        && response.series.series.length > 0
                        && !!response.vod.vods
                        && response.vod.vods.length > 0) {
                        this.router.navigate(['home']);
                    }

                }, error: () => this.router.navigate(['/'], { queryParams: { error: 'true'}})
            });
    }

    private loadCategories() {
        this.store.dispatch(allCategories());
        this.store.dispatch(allVods());
        this.store.dispatch(allSeries());
        this.store.dispatch(allLives());
    }
}

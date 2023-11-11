import { Component, OnInit } from '@angular/core';
import { VodModel } from '@models/vod/vod.model';
import { Store } from '@ngrx/store';
import { VodService } from '@services/vods.service';
import { Observable, finalize, lastValueFrom } from 'rxjs';
import { AppState } from 'src/app/common/store/state';
import { getValue } from 'src/shared/utils/getValue';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    featuredVod: any;
    isLoading: boolean = false;
    vods$: Observable<Array<VodModel>>;

    constructor(
        private store: Store<AppState>,
        private vodService: VodService
    ) {
        this.vods$ = store.select(state => state.vod.vods);
    }

    async ngOnInit(): Promise<void> {
        this.isLoading = true;
        const featured: VodModel | undefined = this.featureVod();
        if (featured) {
            this.featureVod = await lastValueFrom(
                this.vodService.getVodInfo(featured.stream_id)
                    .pipe(finalize(() => this.isLoading = false))
            );
        }
    }

    private featureVod(start: number = 0, limit: number = 10): VodModel | undefined {
        const vods = getValue(this.vods$);
        const feature = vods.slice(start, limit).sort(this.sortByRating).shift();
        return feature;
    }

    private sortByRating(a: VodModel, b: VodModel) {
        if (a.rating > b.rating) {
            return -1;
        } else if (a.rating < b.rating) {
            return 1;
        } else {
            return 0;
        }
    }
}

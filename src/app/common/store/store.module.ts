import { NgModule } from "@angular/core";
import { CategoryEffect } from "@effects/category.effect";
import { LiveEffect } from "@effects/live.effect";
import { LoginEffect } from "@effects/login.effect";
import { SeriesEffect } from "@effects/series.effect";
import { VodEffect } from "@effects/vod.effect";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { categoryReducer } from "@reducers/category.reducer";
import { liveReducer } from "@reducers/live.reducer";
import { loginReducer } from "@reducers/login.reducer";
import { seriesReducer } from "@reducers/series.reducer";
import { vodReducer } from "@reducers/vod.reducer";
import { CategoryService } from "@services/category.service";
import { VodService } from "@services/vods.service";

@NgModule({
    imports: [ 
        StoreModule.forRoot(
            { 
                login: loginReducer,
                category: categoryReducer,
                vod: vodReducer,
                live: liveReducer,
                series: seriesReducer
            }
        ),
        EffectsModule.forRoot([LoginEffect, VodEffect, CategoryEffect, LiveEffect, SeriesEffect])
    ],
    providers: [ VodService, CategoryService ]
})
export class StoreModuleApp{ }
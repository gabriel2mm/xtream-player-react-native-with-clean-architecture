import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, forkJoin, map, mergeMap, of } from "rxjs";
import { CategoryType } from "../types/category.types";
import { CategoryService } from "@services/category.service";
import { allCategoriesError, allCategoriesSuccess } from "@actions/category.action";
import { CategoryModel } from "@models/category/category-model";

@Injectable()
export class CategoryEffect {

    category$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryType.CATEGORY_LOAD),            
            mergeMap((action: any) => 
                forkJoin(
                    this.categoryService.getCategories('get_vod_categories'),
                    this.categoryService.getCategories('get_live_categories'),
                    this.categoryService.getCategories('get_series_categories')
                ).pipe(
                    map(([responseVod, responseLive, responnseSeries]) => allCategoriesSuccess({payload: 
                        [
                            ...responseVod.map(item=> this.setTypeOnCategory(item, 'vod')), 
                            ...responseLive.map(item=> this.setTypeOnCategory(item, 'live')), 
                            ...responnseSeries.map(item=> this.setTypeOnCategory(item, 'series'))
                        ]
                    })),
                    catchError((error) => of(allCategoriesError({ payload: error})))
                )
            )
        ),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private actions$: Actions,
        private categoryService: CategoryService
    ) { }

    private setTypeOnCategory(item: CategoryModel, typeCategory: 'live' | 'vod' | 'series'){
        item.type = typeCategory;
        return item;
    }
}
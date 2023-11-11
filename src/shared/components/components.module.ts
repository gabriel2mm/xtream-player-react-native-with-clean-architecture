import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './form-login/form-login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressComponent } from './progress/progress.component';
import { IconComponent } from './icon/icon.component';
import { MenuComponent } from './menu/menu.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { FeaturedVodComponent } from './featured-vod/featured-vod.component';
import { PipesModule } from '../pipes/pipes.module';
import { SkeletonModule } from './skeleton/skeleton.module';
import { DirectiveModule } from '../directives/directives.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { ContentListComponent } from './content-list/content-list.component';
import { LiveInfoComponent } from './live-info/live-info.component';

@NgModule({
    declarations: [
        FormLoginComponent,
        ProgressComponent,
        IconComponent,
        MenuComponent,
        RecentlyAddedComponent,
        FeaturedVodComponent,
        CategoryListComponent,
        ContentListComponent,
        LiveInfoComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        PipesModule,
        SkeletonModule,
        DirectiveModule,
        MatDividerModule,
        MatIconModule,
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        FormLoginComponent,
        ProgressComponent,
        IconComponent,
        MenuComponent,
        RecentlyAddedComponent,
        FeaturedVodComponent,
        CategoryListComponent,
        ContentListComponent,
        LiveInfoComponent,
    ]
})
export class ComponentsModule { }

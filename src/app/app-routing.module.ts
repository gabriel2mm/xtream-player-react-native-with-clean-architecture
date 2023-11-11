import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from '@guards/user.guard';
import { ROUTES } from '@constants/routes';
import { EmptyContentGuard } from '@guards/empty-content.guard';

const routes: Routes = [
    { path: ROUTES.LOGIN.path, loadChildren: () => import('@pages/login/login.module').then(m => m.LoginModule), },
    { path: ROUTES.LOADCONTENT.path, loadChildren: () => import('@pages/load-content/load-content.module').then(m => m.LoadContentModule), canActivate: [UserGuard] },
    { path: ROUTES.HOME.path, loadChildren: () => import('@pages/home/home.module').then(m => m.HomeModule), canActivate: [UserGuard, EmptyContentGuard] },
    { path: ROUTES.ACCOUNT.path, loadChildren: () => import('@pages/account/account.module').then(m => m.AccountModule), canActivate: [UserGuard, EmptyContentGuard] },
    { path: ROUTES.LIVES.path, loadChildren: () => import('@pages/lives/lives.module').then(m => m.LivesModule), canActivate: [UserGuard, EmptyContentGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

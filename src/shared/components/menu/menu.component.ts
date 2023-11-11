import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'src/shared/constants/routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    readonly routes = ROUTES

    constructor(private router: Router){}

    public goTo(url: string){
        this.router.navigate([url]);
    }
    
    public exit(){
        localStorage.clear();
        this.goTo('/');
    }
}

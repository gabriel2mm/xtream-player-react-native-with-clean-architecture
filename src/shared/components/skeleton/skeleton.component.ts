import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  template: '',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit{
    width: string;
    height: string;

    constructor(private host: ElementRef<HTMLElement>){
        this.width = '0px';
        this.height = '0px';
    }

    ngOnInit(): void {
       const host = this.host.nativeElement;

       host.style.setProperty('--skeleton-width', this.width);
       host.style.setProperty('--skeleton-height', this.height);
    }
}

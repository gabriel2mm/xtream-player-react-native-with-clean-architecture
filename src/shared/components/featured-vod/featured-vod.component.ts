import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-vod',
  templateUrl: './featured-vod.component.html',
  styleUrls: ['./featured-vod.component.scss']
})
export class FeaturedVodComponent {
    @Input() featuredVod : any;
}

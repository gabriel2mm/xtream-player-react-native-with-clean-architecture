import { Component, Input, OnInit } from '@angular/core';
import { VodModel } from '@models/vod/vod.model';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {
    @Input() vods: Array<VodModel> = [];

    ngOnInit(): void {
        this.vods = this.vods.slice(0,7);
    }
}

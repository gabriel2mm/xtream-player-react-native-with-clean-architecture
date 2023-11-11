import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-live-info',
  templateUrl: './live-info.component.html',
  styleUrls: ['./live-info.component.scss']
})
export class LiveInfoComponent implements OnChanges{
    
    @Input() 
    liveInfo: any = {};

    streamURL: string | undefined;

    constructor(private loginService: LoginService){}

    ngOnChanges(changes: SimpleChanges): void {
       if(changes["liveInfo"]){
            this.streamURL = `/${this.liveInfo.stream_id}.rtmp`;
       }
    }

}

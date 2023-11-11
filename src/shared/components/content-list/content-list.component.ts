import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnChanges{

    @Input() contents: any;

    @Input() title: string | undefined;

    @Input() isLoading: boolean = false;

    @Output()
    onSelectContent: EventEmitter<any> = new EventEmitter();

    ngOnChanges(changes: SimpleChanges): void {
        if(changes["contents"]){
            console.log(this.contents);
        }
    }

    onContentSelect(content: any, event: MouseEvent){
        this.onSelectContent.emit({ content, event });
    }       
}

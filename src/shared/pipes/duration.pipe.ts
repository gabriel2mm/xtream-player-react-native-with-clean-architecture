import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    
    transform(value: any, ...args: any[]) {
        const parts = value.split(':');
    
        if (parts.length !== 3) {
          return 0;
        }
        
        const hours = parseInt(parts[0], 10);
        const minutes = parseInt(parts[1], 10);
        const seconds = parseInt(parts[2], 10);
        
        const totalMinutes = (hours * 60) + minutes + (seconds / 60);
        
        return Math.floor(totalMinutes);
    } 

}
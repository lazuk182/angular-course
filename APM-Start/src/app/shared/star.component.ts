import {Component, OnChanges, Input, EventEmitter, Output} from '@angular/core';
@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = 
            new EventEmitter<string>();

    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.starWidth = this.rating * 75 /5;
    }
}
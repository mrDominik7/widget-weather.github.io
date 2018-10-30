import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    @Input() Temp: object;

    constructor() {

    }

    ngOnInit() {
        // if (this.Temp.temperatureTittle === undefined) {
        //     this.Temp.temperatureTittle = 'ok';
        // }
    }


}

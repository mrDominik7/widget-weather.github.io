import {Component, OnInit} from '@angular/core';

// import { info$ } from './data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public tmp;
    public socialData;

    onDataWeather(tmp: object) {
        // console.log(tmp);
        this.tmp = tmp;
    }

    onDataSocial(socialData: object) {
        // console.log(socialData);
        this.socialData = socialData;
    }

    ngOnInit() {
    }

}


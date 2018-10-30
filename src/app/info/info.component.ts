import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {widgetData$} from '../data';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

    image = widgetData$.value[0].img;
    telephoneNumber = widgetData$.value[0].phone;
    addressValue = widgetData$.value[0].address;


    @Output() weatherDataEvent = new EventEmitter<object>();
    @Output() socialDataEvent = new EventEmitter<object>();

    constructor() {}

    // public widgetData$: Observable<object> = widgetData$;

    public ngOnInit(): void {
        // const dataObservable = of(widgetData$);
        // const myObserver = {
        //     next: item => console.log(item)
        // };
        //
        // dataObservable.subscribe(myObserver);

    }

    public onClick(num: number): void {

        this.image = widgetData$.value[num].img;
        this.telephoneNumber = widgetData$.value[num].phone;
        this.addressValue = widgetData$.value[num].address;

        const weatherData = {
                temperatureWater: widgetData$.value[num].weather.water,
                temperatureAir: widgetData$.value[num].weather.temperature,
                temperatureTittle: widgetData$.value[num].weather.title,
            },
            socialData = {
                followers: widgetData$.value[num].social_info.followers,
                following: widgetData$.value[num].social_info.following,
                images: widgetData$.value[num].social_info.img,
                title: widgetData$.value[num].social_info.title
            };
        this.weatherDataEvent.emit(weatherData);
        this.socialDataEvent.emit(socialData);
    }
}

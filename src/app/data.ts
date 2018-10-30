import { of } from 'rxjs';

export interface WidgetModel {
    img: string;
    address: string;
    phone:  string;
    country_code: number;

    weather: object;
    social_info: object;
    type: string;
}

export const widgetData: WidgetModel[] = [
    {
        img: '../../assets/images/hotels.png',
        address: 'BQ Aguamarina Boutique;Sant Antoni de la Platja,;41, Can Pastilla, Spain',
        phone:  '9025706477',
        country_code: 34,
        weather: {
            title: 'Sunny bolearic islands',
            icon: 'sunny',
            water: 23,
            temperature: 34
        },
        social_info: {
            title: 'Be the part of sunny Spain',
            img: '../../assets/images/aguamarina.png',
            followers: 345,
            following: 2567
        },
        type: 'hotels'
    },
    {
        img: '../../assets/images/fishing.png',
        address: 'о. Рыбное',
        phone:  '1234567894',
        country_code: 1,
        weather: {
            title: 'Don\'t forget raincoat',
            icon: 'rainy',
            water: 14,
            temperature: 18
        },
        social_info: {
            title: 'Only for men',
            img: '../../assets/images/go_fishing.png',
            followers: 1000,
            following: 999
        },
        type: 'fishing'
    }
];

export const widgetData$ = of(widgetData);
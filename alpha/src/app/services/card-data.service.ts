import { Injectable } from '@angular/core';
import { CardData } from '../interfaces/card-data';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  public cardData: CardData[] = [
    {
    cardId: 0,
    logoPath: '../../../../../../assets/main-cards/property-insurance-icon.png',
    imgPath: '../../../../../../assets/main-cards/property-insurance.png',
    title: 'ქონების დაზღვევა'
    },
    {
    cardId: 1,
    logoPath: '../../../../../../assets/main-cards/automobile-insurance-icon.png',
    imgPath: '../../../../../../assets/main-cards/automobile-insurance.png',
    title: 'ავტომობილის დაზღვევა'
    },
    {
    cardId: 2,
    logoPath: '../../../../../../assets/main-cards/travel-insurance-icon.png',
    imgPath: '../../../../../../assets/main-cards/travel-insurance.png',
    title: 'სამოგზაურო დაზღვევა'
    },
    {
    cardId: 3,
    logoPath: '../../../../../../assets/main-cards/health-insurance-icon.png',
    imgPath: '../../../../../../assets/main-cards/health-insurance.png',
    title: 'ჯანმრთელობის დაზღვევა'
    },
    {
    cardId: 4,
    logoPath: '../../../../../../assets/main-cards/bank-insurance-icon.png',
    imgPath: '../../../../../../assets/main-cards/bank-insurance.png',
    title: 'საბანკო დაზღვევა'
    },
    {
    cardId: 5,
    logoPath: '../../../../../../assets/main-cards/other-insurance-icon.png',
    imgPath: '../../../../../../assets/main-cards/other-insurance.png',
    title: 'სხვა'
    },
  ]

}

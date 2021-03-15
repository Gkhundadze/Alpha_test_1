import { Injectable } from '@angular/core';
import { CardData } from '../interfaces/card-data';


@Injectable({
  providedIn: 'root'
})
export class InsuranceCardsService {
public insuranceCards:CardData[] = [
  {
    cardId: 0,
    logoPath: '../../../../../../assets/main-cards/automobile-insurance-icon.png',
    imgPath: '../../../../../../assets/insurance-cards/auto_insurance.png',
    title: 'ავტომობილის დაზღვევა'
  },
  {
    cardId: 0,
    logoPath: '../../../../../../assets/main-cards/automobile-insurance-icon.png',
    imgPath: '../../../../../../assets/insurance-cards/resmonsibility_insurance.png',
    title: 'პასუხისმგებლობის დაზღვევა'
  },
  {
    cardId: 0,
    logoPath: '../../../../../../assets/main-cards/automobile-insurance-icon.png',
    imgPath: '../../../../../../assets/insurance-cards/driver_passenger_insurance.png',
    title: 'მძღოლისა და მგზავრის დაზღვევა'
  }
]
}

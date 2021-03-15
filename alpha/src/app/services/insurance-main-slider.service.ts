import { Injectable } from '@angular/core';
import { MainSliderData } from '../interfaces/main-slider-data';

@Injectable({
  providedIn: 'root'
})
export class InsuranceMainSliderService {
  public insuranceMainData:MainSliderData[] = [
  {
    id: 0,
    imagePath: '../../../../../../assets/main-cover-slider/auto-insurance.png',
    title: 'დააზღვიე ავტომობილი თვეში 60 ლარად',
    description: 'თუ თქვენ ფლობთ ბინას ან საკუთარ სახლს, რომლის საერთო ფართი არ აღემატება 120 კვ.მ.-ს, ეს დაზღვევა თქვენთისაა.',
  }
]
}

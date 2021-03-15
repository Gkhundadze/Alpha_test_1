import { Injectable } from '@angular/core';
import { MainSliderData } from '../interfaces/main-slider-data';

@Injectable({
  providedIn: 'root'
})
export class MainSliderService {
  public mainSliderData:MainSliderData[] = [
    {
      id: 0,
      imagePath: '../../../../../../assets/main-cover-slider/main_cover.png',
      title: 'დააზღვიე სახლი თვეში 100 ლარად',
      description: 'თუ თქვენ ფლობთ ბინას ან საკუთარ სახლს, რომლის საერთო ფართი არ აღემატება 120 კვ.მ.-ს, ეს დაზღვევა თქვენთისაა.',
    },
    
  ]


}

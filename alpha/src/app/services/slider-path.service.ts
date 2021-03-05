import { Injectable } from '@angular/core';
import { ImageData } from '../interfaces/image-data';


@Injectable({
  providedIn: 'root'
})
export class SliderPathService {
  public imgData:ImageData[] = [
    {
      imageId: 0, 
      imageUrl: '../../../../../../assets/slider/agro.png',
      imageTitle: 'აგრო დაზღვევა'
    },
    {
      imageId: 1, 
      imageUrl: '../../../../../../assets/slider/dazgveva.png',
      imageTitle: 'ტვირთის გადაზიდვა'
    },
    {
      imageId: 0, 
      imageUrl: '../../../../../../assets/slider/agro.png',
      imageTitle: 'აგრო დაზღვევა'
    },
    {
      imageId: 1, 
      imageUrl: '../../../../../../assets/slider/dazgveva.png',
      imageTitle: 'ტვირთის გადაზიდვა'
    },
    {
      imageId: 0, 
      imageUrl: '../../../../../../assets/slider/agro.png',
      imageTitle: 'აგრო დაზღვევა'
    },
    {
      imageId: 1, 
      imageUrl: '../../../../../../assets/slider/dazgveva.png',
      imageTitle: 'ტვირთის გადაზიდვა'
    },
  ];

  
}

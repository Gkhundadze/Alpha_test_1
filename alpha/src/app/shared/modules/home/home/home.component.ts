import { Component, OnInit, ViewChild, } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { CardData } from 'src/app/interfaces/card-data';
import { ImageData } from "src/app/interfaces/image-data";
import { CardDataService } from 'src/app/services/card-data.service';
import { SliderPathService } from 'src/app/services/slider-path.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imgData:ImageData[] = [];
  public cardData:CardData[] = [];
constructor( 
  private cardsDb: CardDataService,
  private imagesDb: SliderPathService,){

}



  @ViewChild('nav', {read: DragScrollComponent, static: true}) ds!: DragScrollComponent;
  
  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
  ngOnInit(){
    this.imgData = this.imagesDb.imgData;
    this.cardData = this.cardsDb.cardData;
    
  
  }

}

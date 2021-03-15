import { Component, OnInit, ViewChild, } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { CardData } from 'src/app/interfaces/card-data';
import { ImageData } from "src/app/interfaces/image-data";
import { IndividualPackets } from 'src/app/interfaces/individual-packets';
import { MainSliderData } from 'src/app/interfaces/main-slider-data';
import { CardDataService } from 'src/app/services/card-data.service';
import { ExclusivePacketsService } from 'src/app/services/exclusive-packets.service';
import { IndividualPacketsService } from 'src/app/services/individual-packets.service';
import { MainSliderService } from 'src/app/services/main-slider.service';
import { SliderPathService } from 'src/app/services/slider-path.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imgData:ImageData[] = [];
  public cardData:CardData[] = [];
  public mainSlider: MainSliderData[] = [];
  public individualPackets: IndividualPackets[] = []
  public exclusivePackets: IndividualPackets[] = []
constructor( 
  private cardsDb: CardDataService,
  private imagesDb: SliderPathService,
  private mainSliderDb: MainSliderService,
  private individualPacketsDb: IndividualPacketsService,
  private exclusivePacketsDb: ExclusivePacketsService,
  ){

}
  @ViewChild('nav', {read: DragScrollComponent, static: true}) ds!: DragScrollComponent;
  @ViewChild('drag', {read: DragScrollComponent, static: true}) ds2!: DragScrollComponent;
  // @ViewChild('drag', {read: DragScrollComponent, static: true}) ds3!: DragScrollComponent;
  
  moveLeft() {
    this.ds.moveLeft();
  }
  moveToIndex(i:number){
    this.ds2.moveTo(i)
  }
  moveRight() {
    this.ds.moveRight();
  }
  businessMove(i:number):void{
    this.ds.moveTo(i)
  }
  ngOnInit(){
    
    this.imgData = this.imagesDb.imgData;
    this.cardData = this.cardsDb.cardData;
    this.mainSlider = this.mainSliderDb.mainSliderData;
    this.individualPackets = this.individualPacketsDb.individualCardsDb;
    this.exclusivePackets = this.exclusivePacketsDb.exclusivePacketsdb
  
  }

}

import { Component, OnInit, ViewChild, } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ImageData } from "src/app/interfaces/image-data";
import { SliderPathService } from 'src/app/services/slider-path.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imgData:ImageData[] = []
constructor( private imagesDb:SliderPathService){

}



  @ViewChild('nav', {read: DragScrollComponent, static: true}) ds!: DragScrollComponent;
  
  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
  ngOnInit(){
    this.imgData = this.imagesDb.imgData
    
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { CardData } from 'src/app/interfaces/card-data';
import { MainSliderData } from 'src/app/interfaces/main-slider-data';
import { InsuranceCardsService } from 'src/app/services/insurance-cards.service';
import { InsuranceMainSliderService } from 'src/app/services/insurance-main-slider.service';

@Component({
  selector: 'app-for-me',
  templateUrl: './for-me.component.html',
  styleUrls: ['./for-me.component.scss']
})
export class ForMeComponent implements OnInit {
  public mainslider : MainSliderData[] = [];
  public cardData : CardData[] = [];
  constructor(
    private MainSliderDb:InsuranceMainSliderService,
    private cards: InsuranceCardsService,
    private router: ActivatedRoute,
    ) { }
  // @ViewChild('nav', {read: DragScrollComponent, static: true}) ds!: DragScrollComponent;




  ngOnInit(): void {
    this.mainslider = this.MainSliderDb.insuranceMainData;
    this.cardData = this.cards.insuranceCards;

    

    
    
  }

}

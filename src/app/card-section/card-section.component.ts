import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {

  @Input()
  cardNumber: number;

  @Input()
  customType: string;

  @Input()
  longName: string;

  constructor() { }

  ngOnInit() {
  }

}

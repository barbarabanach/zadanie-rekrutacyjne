import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history-action',
  templateUrl: './history-action.component.html',
  styleUrls: ['./history-action.component.scss']
})
export class HistoryActionComponent implements OnInit {

  @Input()
  action: Object;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  history = [
    {
      type: 'videochat',
      agentName: 'Jan Kowalski',
      agentRole: 'starszy konsultant',
      actionTitle: 'Kredyt konsolidacyjny'
    },
    {
      type: 'chat',
      agentName: 'Robert Wypis',
      agentRole: 'starszy konsultant',
      actionTitle: 'Lokaty bankowe'
    },
    {
      type: 'cobrowsing',
      agentName: 'Jan Kowalski',
      agentRole: 'starszy konsultant',
      actionTitle: 'Kredyty hipoteczne'
    }

  ];
  
  
  constructor() { }

  ngOnInit() {
  }

}

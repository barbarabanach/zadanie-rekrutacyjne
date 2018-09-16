import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bbanach';

  containers = [
    {
      customType: 'videochat',
      longName: 'Porozmawiaj VIDEO',
      cardNumber: 30
    },
    {
      customType: 'chat',
      longName: 'Napisz na CZACIE',
      cardNumber: 12
    },
    {
      customType: 'cobrowsing',
      longName: 'Włącz COBROWSING',
      cardNumber: 20
    },
  ];
}

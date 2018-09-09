import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { HistoryComponent } from './history/history.component';
import { HistoryActionComponent } from './history-action/history-action.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    CardSectionComponent,
    HistoryComponent,
    HistoryActionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

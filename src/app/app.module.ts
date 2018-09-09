import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CardSectionComponent } from './card-section/card-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    CardSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

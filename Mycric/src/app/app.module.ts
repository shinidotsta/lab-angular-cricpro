import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CricComponent } from './cric/cric.component';
import { Player1Component } from './player1/player1.component';

@NgModule({
  declarations: [
    AppComponent,
    CricComponent,
    Player1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

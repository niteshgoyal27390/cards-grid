import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { EditCardComponent } from './cards/cards/edit-card/edit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    EditCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditCardComponent]
})
export class AppModule { }

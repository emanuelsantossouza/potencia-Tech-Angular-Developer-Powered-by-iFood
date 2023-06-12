import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card-diretivas-estruturais/card.component';
import { CardDiretivasAtributosComponent } from './card-diretivas-atributos/card-diretivas-atributos.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardDiretivasAtributosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

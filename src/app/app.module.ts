import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import {FormsModule} from '@angular/forms';
import { DemopetComponent } from './demopet/demopet.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    DemopetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
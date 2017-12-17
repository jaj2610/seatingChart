import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SeatingModule } from './seating/seating.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SeatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

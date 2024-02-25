import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './Modules/weather/page/weather-home/weather-home.component';
import { WeatherCardComponent } from './Modules/weather/components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    WeatherCardComponent,
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

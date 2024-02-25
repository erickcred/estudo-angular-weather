import { Component, Input, OnInit } from '@angular/core';
import { Temperatura } from '../../page/weather-home/weather-home.component';
import { faDroplet, faTemperature0, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit {

  @Input() temperaturaInput!: Temperatura;

  tempIcon = faTemperature0
  tempMinIcon = faTemperatureLow;
  tempMaxIcon = faTemperatureHigh;
  tempUmidadeIcon = faDroplet;
  tempVentoIcon = faWind;

  constructor() { }

  ngOnInit() {}

}

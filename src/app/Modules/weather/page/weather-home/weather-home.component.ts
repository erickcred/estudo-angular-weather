import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new(Subject);

  temperatura!: Temperatura;
  searchIcon = faMagnifyingGlass;
  nomeCidade: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.pegarClima();
  }

  pegarClima(): void {
    const cidade = this.nomeCidade == ''? 'São Paulo' : this.nomeCidade;

    this.weatherService.getWeather(cidade)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response: Temperatura) => {
          response && (this.temperatura = response);
        },
        error: (error: any) => {
          console.log('Error');
          console.log(error);
        }
      });
  }

  pegaNomeCidade() {
    this.pegarClima();
    this.nomeCidade = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export interface Temperatura {
  coord: {
    lon: number
    lat: number
  },
  weather: [{
    id: number
    main: string
    descripton: string
    icon: string
  }],
  base: string,
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timesone: number
  id: number
  name: string
  cod: number
}

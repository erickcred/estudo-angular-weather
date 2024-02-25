import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, tap } from 'rxjs';
import { Temperatura } from '../page/weather-home/weather-home.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private urlBase: string = 'https://api.openweathermap.org/data/2.5';
  private endpoint: string = 'weather';
  private appid: string = '03360c35fc45acdca39cb668def7b68f';

  constructor(private http: HttpClient) { }

  getWeather(cidade: string): Observable<Temperatura> {
    return this.http.get<Temperatura>(`${this.urlBase}/${this.endpoint}?q=${cidade}&units=metric&mode=json&appid=${this.appid}`).pipe(
      first(),
      // tap(x => console.log(x))
    );
  }

}

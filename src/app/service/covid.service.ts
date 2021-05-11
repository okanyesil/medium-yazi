import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICovid } from '../model/covid-model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  apiKey = '58b2358110mshecb6e9f9b294737p1b4b04jsn72319311cd2d';
  hostKey = 'covid-19-coronavirus-statistics2.p.rapidapi.com';
  header: HttpHeaders = new HttpHeaders({
    'x-rapidapi-key': this.apiKey,
    'x-rapidapi-host': this.hostKey
  });

  getLatestDailyReportByCountryName() {
    return this.http.get<ICovid>("https://covid-19-coronavirus-statistics2.p.rapidapi.com/countriesData");
  }
}

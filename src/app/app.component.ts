
import { Component, OnInit } from '@angular/core';
import { CovidService } from './service/covid.service';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import {  ICovid } from './model/covid-model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'intercaptionUygulama';
  covidInfo: ICovid;
  
  

  constructor(private covidService: CovidService, private spinnerService: NgxSpinnerService) {

  }
  ngOnInit(): void {
    this.covidService.getLatestDailyReportByCountryName()
    .pipe(map(value => value["result"]), mergeMap(value => value) , filter(country => country["country"] === "Russia")
    ).subscribe(info => {
      this.covidInfo = <ICovid>info;

    });
  }
  getReportByCountryName(countryName: string) {
    this.covidService.getLatestDailyReportByCountryName()
    .pipe(map(value => value["result"]), mergeMap(value => value) , filter(country => country["country"] === countryName)
    ).subscribe(info => {
      this.covidInfo = <ICovid>info;

    });
    
  }

}

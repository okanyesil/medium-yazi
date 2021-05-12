import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of, interval, timer, range, from, fromEvent, merge, concat, throwError } from 'rxjs';
import { first, filter, distinct, debounceTime, skip, take, map, mergeMap, reduce, tap, finalize, timeout, catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
  <input type="text" #searchBox>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'rxjsExample';
  ulkeInfo : {ulkeAdi: string, ulkeKodu}[] = [];
  constructor() {
  }
  @ViewChild('searchBox')
  input: ElementRef;
  ngAfterViewInit(): void {
    /* From Event DebounceTime Örneği */
    //const value = fromEvent<any>(this.input.nativeElement, 'keyup').pipe(debounceTime(300)).subscribe(value => console.log(value));
  }

  ngOnInit(): void {
    this.ulkeInfo.push({ulkeAdi: "Türkiye", ulkeKodu: "TR"});
    this.ulkeInfo.push({ulkeAdi: "USA", ulkeKodu: "ABD"});
    this.ulkeInfo.push({ulkeAdi: "İtalya", ulkeKodu: "It"});
    this.ulkeInfo.push({ulkeAdi: "Rusya", ulkeKodu: "Ru"});
    this.ulkeInfo.push({ulkeAdi: "İngiltere", ulkeKodu: "UK"});
    this.ulkeInfo.push({ulkeAdi: "Türkiye", ulkeKodu: "TR"});
    const countryInfo = from(this.ulkeInfo);
    /* Finalize */
   // countryInfo.pipe(tap(value => console.log(value)), finalize(() => console.log('En Güzel Ülke Türkiyedir.'))).subscribe();
    
   /* Merge Map */
    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
   mergeMap(x => interval(1000).pipe(map(i => x+i))));
   //result.subscribe(x => console.log(x));
      /* retry örneği */
   const example = interval(1000).pipe(
    mergeMap(val => {
      if (val > 5) {
        return throwError('Error!');
      }
      return of(val);
    }),
    retry(2)
  );
  example.subscribe({
    next: value => console.log(value),
    error: value => console.log(`${value}: 2 kere terkar denendi ve çıktı`)
  });

    
    /* Timeout catchError */
    const timeOutExample = interval(5000);
    //timeOutExample.pipe(timeout(3000), catchError(val =>  of(`Hata yakalandı. ${val}`))).subscribe(console.log);

    /* Concat */
    //const mergeExample = merge(letters, countryInfo, sayilar);
    //mergeExample.subscribe(console.log);
    /*concat(
      of(1,2,3),
      of(4,5,6),
      of(7,8,9)
    ).subscribe(console.log);*/

      /* Reduce */
    const sayilar = from([1,2,3,4,5,6]);
   // sayilar.pipe(reduce((acc, nextValue) => acc + nextValue)).subscribe(console.log);
    
   //sayilar.pipe(map(value => value *2), tap(value => console.log(value))).subscribe();
    

   /* Skip */
    //countryInfo.pipe(skip(2)).subscribe(console.log);


    /* take */
    // countryInfo.pipe(take(3)).subscribe(console.log);

      /* Map */
   // countryInfo.pipe(map(value => value.ulkeAdi + '-' +value.ulkeKodu)).subscribe(console.log);

   
    

    

    /* of */
const source = of(1,2,3,4,5, "okan", "mehmet");
    //source.subscribe(data => console.log(data));

    /* interval */

    const source1 = interval(5000);
    //source1.subscribe(value => console.log(value));

    /* Timer */
    // Sadece bir kere çalışır
    const timerExample = timer(5000);
    timerExample.subscribe(value => console.log(value));
    //Sonsuz çalışır
    const timerExample1 = timer(1000, 2000);
    timerExample1.subscribe(value => console.log(value));


    /* Range */
     const numbers = range(1,5);
    numbers.subscribe({
      next: value => console.log(value),
      complete: () => console.log("Bitti!!!")
    });
    /* First */
    const source3 = interval(5000);
    source3.pipe(first()).subscribe(value => console.log(value))
    
  }
 
  
}

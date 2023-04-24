import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map, observable } from 'rxjs';

@Component({
  selector: 'app-observablesdemo',
  templateUrl: './observablesdemo.component.html',
  styleUrls: ['./observablesdemo.component.css']
})
export class ObservablesdemoComponent implements OnInit, OnDestroy {

  constructor() { }

  private intervalSubscription: Subscription;
  private customObeservableSubscription: Subscription;

  ngOnInit(): void {
    this.intervalSubscription = interval(1000).subscribe((count) =>{
      console.log(count)
    })

    const customObservable = Observable.create((observer) =>{
      let count = 0
      setInterval(()=> {
        observer.next(count)
        count++
        if(count == 21){
          observer.complete();
        }
      },1000)
    });
  
    this.customObeservableSubscription = customObservable.pipe(filter((data:number)=>
    {
      return data%2==0
    }),
    map((data:number)=>{
        return 'B' + data
    })
    )
    .subscribe((data)=>{
      console.log(data);
    },
    (error)=>{
      alert(error.message)
    })

  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
    this.customObeservableSubscription.unsubscribe();
  }
}

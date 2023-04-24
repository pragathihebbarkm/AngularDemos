import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-a-product',
  templateUrl: './a-product.component.html',
  styleUrls: ['./a-product.component.css']
})
export class AProductComponent implements OnInit, OnChanges {

  constructor() {
    console.log('product component constructor called')
   }

  ngOnInit(): void {
    console.log("component initialized")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called')
    console.log(changes)
  }

  @Input('product')
  product:{
    productName: string;
    productDescription : string;
    productQuantity : number;
    productCost : number;
  }
}

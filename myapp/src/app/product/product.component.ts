import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products=[];

  onAddProduct(productData: {
    productName: string;
    productDescription : string;
    productQuantity : number;
    productCost : number;
  }){
    this.products.push(productData)
  }
}

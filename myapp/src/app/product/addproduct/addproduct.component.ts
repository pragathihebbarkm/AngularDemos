import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newProductName: string;
  newProductDescription : string;
  newProductQuantity : number;
  newProductCost : number;

  @Output()
  productAdded = new EventEmitter<{
    productName: string;
    productDescription : string;
    productQuantity : number;
    productCost : number;
  }>();

  onAddProduct() {
    this.productAdded.emit({
      productName: this.newProductName,
      productDescription: this.newProductDescription,
      productQuantity:this.newProductQuantity,
      productCost :this.newProductCost
    });
    this.resetFields;
  }

  resetFields(){
    this.newProductName="",
    this.newProductDescription="",
    this.newProductQuantity=null,
    this.newProductCost=null
  }
}

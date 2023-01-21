import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productItem : any
  productquantity : number= 1;
  constructor() { }

  ngOnInit(): void {
  }

}

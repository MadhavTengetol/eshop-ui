import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any =[];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getProducts().subscribe(result =>{
      console.log(result);

      this.products=result;
    });
  }

}

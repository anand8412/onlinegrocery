import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import Product from '../product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: any = [];

  constructor(private productService: ProductService) {
  		this.getAllProducts()
   }

  ngOnInit() {
  }


  getAllProducts(){
  	this.productService.getAllProducts().
  	subscribe(res => {
                          this.productsList = res;
                     }
              );
  }
}

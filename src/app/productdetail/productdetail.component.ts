import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../product.service';
import Product from '../product';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

 selectedProduct: any = {};
 selectedProductId: String;

  constructor(activatedRoute: ActivatedRoute,private productService: ProductService) { 
		this.selectedProductId = activatedRoute.snapshot.paramMap.get("id");
		this.getProduct();
	}
	
  ngOnInit() {

  }

    getProduct(){
	  	this.productService.getProduct(this.selectedProductId).
	  	subscribe(res => {
	                      this.selectedProduct = res;
	                     }
	              );
    }

}

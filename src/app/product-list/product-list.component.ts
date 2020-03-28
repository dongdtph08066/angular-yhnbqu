import { Component, OnInit } from '@angular/core';
import  {Product } from "../Product";
import { ProductService } from "../service/product.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   products: Product[];
  

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProduct();
    
  }

    getProducts(){
    this.productService.getProducts().subscribe(response => this.products = response, error => console.log(error));
  
 }

}
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductsApiService } from 'src/app/service/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public productlist:any;
  constructor(private api:ProductsApiService, private cartApi:CartService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe((res=>{
      this.productlist=res;
      this.productlist.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    }))
  }

  addToCart(item:any){
   this.cartApi.addtoCart(item);   
  }

}

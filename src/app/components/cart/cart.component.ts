import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  products:any=[];
  totalPrice:number=0;
  constructor(private cartApi:CartService) { }

  ngOnInit(): void {
    this.cartApi.getProducts().subscribe((res)=>{
      this.products=res;
      this.totalPrice=this.cartApi.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cartApi.removeCartItem(item);
  }

  removeAllItem(){
    this.cartApi.removeAllcartItem();
  }

}

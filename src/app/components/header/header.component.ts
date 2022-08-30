import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService:CartService) { }
  totalCartItem:number=0;
  ngOnInit(): void {

    this.cartService.getProducts().subscribe((res)=>{
      this.totalCartItem=res.length;
    })
  }

}

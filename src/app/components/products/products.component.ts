import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductsApiService } from 'src/app/service/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productlist: any;
  public filterProductByCategory: any;
  public searchKey: string = "";
  constructor(private api: ProductsApiService, private cartApi: CartService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe((res => {
      this.productlist = res;
      this.filterProductByCategory = res;
      this.productlist.forEach((a: any) => {
        if (a.category === "women's clothing" || a.category === "men's clothing") {
          a.category = 'fashion'
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });

    }));
    
    this.cartApi.search.subscribe((val: any) => {
      this.searchKey = val;
     

    })
  }

  addToCart(item: any) {
    this.cartApi.addtoCart(item);
  }

  filter(category: string) {
    this.filterProductByCategory = this.productlist.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    })
  }

}

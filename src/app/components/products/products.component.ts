import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/service/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public productlist:any;
  constructor(private api:ProductsApiService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe((res=>{
      this.productlist=res;
    }))
  }

}

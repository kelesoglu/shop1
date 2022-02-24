import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "./product";
import {AlertifyService} from "../services/alertify.service";
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {SortProductComponent} from "../sort-product/sort-product.component";
import {CartService} from "../services/cart.service";
import {ToastrService} from "ngx-toastr";
//declare let alertifyjs :any

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService,CartService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyServices:AlertifyService,
              private productService:ProductService,private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService,private cartService:CartService
              ) { }

  title='Ürün Listesi'
  filterText=""
  path="http://localhost:3000/products"
  products : Product[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products=data
      });
    })

  }

  /*addToCart(product: { name: string; }){
    this.alertifyServices.success(product.name + " eklendi");
  }*/
  addToCart(product:Product){
    if(product.id===1){
      this.alertifyServices.error("Hata Bu ürün sepete eklenemez")
    }else{
      this.alertifyServices.success( product.name +" sepete eklendi ")
      this.cartService.addToCart(product);
    }
  }
}

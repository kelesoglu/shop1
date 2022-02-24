import { Component, OnInit } from '@angular/core';
import {Product} from "../product/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {AlertifyService} from "../services/alertify.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  products: Product[];
  product:{ price: number; name: string; description: string; id: number;imageUrl:string } =
    {id:0,name:"",price:0,description:"",imageUrl:""};
  //errorMessage: '';

  constructor(private activatedRoute: ActivatedRoute,private productService: ProductService,
               private alertifyServices: AlertifyService
  ) {
  }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        this.getProductById(params["id"])
      })
    }

    getProductById(id:number){
      this.productService.getProductById(id).subscribe(data=>{
        this.product = data
      })
    }
  addToCart(product: { name: string; }){
    this.alertifyServices.success(product.name + " eklendi")
  }
  }


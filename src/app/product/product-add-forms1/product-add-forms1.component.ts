import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../category/category";
import {ProductService} from "../../services/product.service";
import {AlertifyService} from "../../services/alertify.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddForms1Component implements OnInit {

  constructor(private categoryService:CategoryService,private productService:ProductService,
              private alertifyService:AlertifyService) { }
  model:Product=new Product()
  categories:Category[];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    })
  }
  add(form: NgForm) {
    this.productService.addProduct(this.model).subscribe(data=>{
      this.alertifyService.success(data.name +" başarıyla eklendi.")
    })
    //console.log(form.value.name)
  }

}
